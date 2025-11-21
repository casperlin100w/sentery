document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------------
    // 漢堡選單功能
    // -----------------------------------------------------------
    const menuBtn = document.querySelector('.menu');
    const navMenu = document.querySelector('header ul');

    // 1. 點擊漢堡按鈕時，切換選單的顯示狀態
    menuBtn.addEventListener('click', (e) => {
        // 阻止點擊事件冒泡到 document，避免選單剛開啟就立即被 document 上的監聽器關閉
        e.stopPropagation(); 
        navMenu.classList.toggle('show');
        const expanded = navMenu.classList.contains('show');
        menuBtn.setAttribute('aria-expanded', expanded);
    });

    // 2. 新增功能：點擊選單外部區域時關閉選單
    document.addEventListener('click', (e) => {
        // 檢查三個條件：
        // A. 選單是開啟的
        const isMenuOpen = navMenu.classList.contains('show');
        // B. 點擊目標不是漢堡按鈕本身
        const isClickingMenuButton = menuBtn.contains(e.target);
        // C. 點擊目標不在導航選單 ul 內部
        const isClickingInsideMenu = navMenu.contains(e.target);

        // 如果選單開啟中，且點擊的目標既不是按鈕也不是選單內部，則關閉選單
        if (isMenuOpen && !isClickingMenuButton && !isClickingInsideMenu) {
            navMenu.classList.remove('show');
            menuBtn.setAttribute('aria-expanded', false); // 更新 ARIA 狀態
        }
    });

});

const ball = document.getElementById('follower-ball');

document.addEventListener('mousemove', (e) => {
    // 獲取鼠標當前的 X 和 Y 座標
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // 將球的位置設置到鼠標的位置
    // 減去球本身寬度/高度的一半 (15px)，以確保球的中心位於鼠標上
    const ballSize = 30; // 根據 CSS 中的寬度/高度設定
    
    // 使用 translate() 進行移動
    ball.style.transform = `translate(${mouseX - ballSize / 2}px, ${mouseY - ballSize / 2}px)`;
});