body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-image: url('images/e6346.jpg');
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    
    /* 模糊效果 */
    position: relative;
    overflow: hidden;
}

body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: inherit;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    filter: blur(3px);
    z-index: -1;
}

/* 确保内容在模糊背景上清晰显示 */
.content {
    position: relative;
    z-index: 1;
    background-color: rgba(168, 168, 168, 0.7); /* 可选：为内容添加半透明背景 */
    min-height: 100vh;
}

