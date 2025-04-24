// 配置项
const backgroundConfig = {
  portrait: {
    basePath: 'images/portrait/', // 竖屏图片目录
    images: ['1.jpg', '2.jpg', '3.jpg'], // 竖屏图片文件名
    interval: 6000
  },
  landscape: {
    basePath: 'images/landscape/', // 横屏图片目录
    images: ['1.jpg', '2.jpg', '3.jpg'], // 横屏图片文件名
    interval: 6000
  }
};

// 初始化背景系统
function initBackgroundSystem() {
  const container = document.getElementById('bgContainer');
  container.innerHTML = '';

  // 获取当前方向模式
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  const mode = isPortrait ? 'portrait' : 'landscape';
  currentMode = mode;

  // 创建新背景层（自动拼接路径）
  backgroundConfig[mode].images.forEach((filename, index) => {
    const div = document.createElement('div');
    div.className = `background-image ${index === 0 ? 'active' : ''}`;
    
    // 自动拼接完整路径
    const fullPath = `${backgroundConfig[mode].basePath}${filename}`;
    div.style.backgroundImage = `url(${fullPath})`;
    
    container.appendChild(div);
  });

  startRotation(mode);
}

// 其他代码保持不变...
