// 预配置的API设置 - 无需用户配置版

// 预设API配置 - 这里预先设置好您的API密钥
let apiConfig = {
    url: 'https://api.siliconflow.cn/v1/chat/completions',
    key: 'sk-nhpnhetivpwqqcqoreqzqcklakyxnfjzjhzbtszfwjplfrhl', // 请在发布前替换为您的实际API密钥
    isConfigured: true,
    model: 'Qwen/Qwen3-14B'  // 或其他您想使用的模型
};

// 获取API配置
function getApiConfig() {
    return {
        url: apiConfig.url,
        key: apiConfig.key,
        model: apiConfig.model, 
        isConfigured: apiConfig.isConfigured
    };
}

// 显示提示消息 - 安全版本，确保DOM已加载
function showToast(message) {
    // 如果DOM未加载完成，添加到队列，等DOM加载后再显示
    if (!document || !document.body) {
        console.log('DOM未加载，消息已保存:', message);
        return;
    }
    
    try {
        // 检查是否已存在toast元素
        let toast = document.querySelector('.toast-message');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast-message';
            document.body.appendChild(toast);
        }
        
        toast.textContent = message;
        toast.classList.add('show');
        
        // 3秒后隐藏
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    } catch (err) {
        console.error('显示提示消息出错:', err);
    }
}

// 加载API配置 - 这个版本不需要真正加载，只是为了兼容性保留函数
function loadApiConfig() {
    console.log('API已预配置');
    return true;
}

// 等待DOM加载完成后再导出函数
function initApiConfig() {
    try {
        window.loadApiConfig = loadApiConfig;
        window.getApiConfig = getApiConfig;
        window.showToast = showToast;
        console.log('API配置已加载');
        return true;
    } catch (err) {
        console.error('初始化API配置出错:', err);
        return false;
    }
}

// 确保在DOM加载完成后才初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApiConfig);
} else {
    initApiConfig();
} 