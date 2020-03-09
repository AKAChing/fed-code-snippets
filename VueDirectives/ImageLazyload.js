import { throttle } from '@/utils'
class lazyload {
  constructor(el, binding) {
    const {
            src,
            width = 1,
            height = 1,
            root = null,
            rootMargin = '0px 0px 0px 0px',
            thresholds = 0
          } = binding.value
    this.el = el
    this.src = src
    this.width = width
    this.height = height
    this.root = root
    this.rootMargin = rootMargin
    this.thresholds = thresholds

    this.windowInnerHeight = window.innerHeight
    this.isSupportIO = window.IntersectionObserver
    this.parentNode = el.parentNode

    this.parentNode.classList.add('lazyload-container')
    this.parentNode.style.paddingBottom = this.getPaddingBottom()

    this.placeholder = document.createElement('section')
    this.placeholder.classList.add('lazyload-bg', 'loading')

    this.el.dataset.src = this.src
    this.el.classList.add('lazyload-img')

    this.parentNode.appendChild(this.placeholder)
  }

  getPaddingBottom() {
    return (this.height / this.width) * 100 + '%'
  }

  observe() {
    let io = new IntersectionObserver(entries => {
      if (entries[0].intersectionRatio <= 0) return
      this.el.src = this.el.dataset.src
      this.el.onload = () => {
        this.placeholder.classList.toggle('loading')
        this.placeholder.classList.add('loaded')
        io.unobserve(this.el)
      }
    })
    io.observe(this.el)
  }

  ieObserve() { // IE只支持纵向滚动且不能指定容器
    const elHeight = this.el.getBoundingClientRect().height
    let elTopDistance
    let fn = throttle(() => {
      elTopDistance = this.el.getBoundingClientRect().top; // 滚动时获取元素距离顶部的距离
      if (elTopDistance >= -elHeight && elTopDistance < this.windowInnerHeight) {
        this.el.src = this.el.dataset.src
        this.placeholder.classList.toggle('loading')
        this.placeholder.classList.add('loaded')
      }  
    }, 300)
    window.addEventListener('scroll', fn)
    window.onload = fn()
  }

  init() {
    if (this.isSupportIO) {
      this.observe()
    } else {
      this.ieObserve()
    }
  }
}
export default Vue => {
  Vue.directive("lazyLoad", {
    inserted: function (el, binding) {
      let ob = new lazyload(el, binding)
      ob.init()
    }
  })
  Vue.directive("test", {
    inserted: function (el, binding) {
      console.log('test')
    }
  })
}