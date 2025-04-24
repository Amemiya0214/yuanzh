// 配置项
const config = {
  images: [
    'images/bg1.jpg',
    'images/bg2.jpg',
    'images/bg3.jpg'
  ],
  interval: 6000 // 6秒
};

// 初始化背景系统
function initBackgroundSystem() {
  const container = document.getElementById('bgContainer');
  let currentIndex = 0;

  // 创建背景层
  config.images.forEach((imgPath, index) => {
    const bgLayer = document.createElement('div');
    bgLayer.className = `background-image ${index === 0 ? 'active' : ''}`;
    bgLayer.style.backgroundImage = `url(${imgPath})`;
    container.appendChild(bgLayer);
  });

  // 启动定时切换
  setInterval(() => {
    const layers = container.children;
    layers[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % layers.length;
    layers[currentIndex].classList.add('active');
  }, config.interval);
}

// 预加载图片
function preloadImages() {
  config.images.forEach(imgPath => {
    const img = new Image();
    img.src = imgPath;
  });
}

// 启动初始化
document.addEventListener('DOMContentLoaded', () => {
  preloadImages();
  initBackgroundSystem();
});
