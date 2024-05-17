const copyText = document.getElementById('copyText');

copyText.addEventListener('click', function() {
    const textToCopy = this.textContent; // Получаем текст элемента

    // Копируем текст в буфер обмена
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert('Текст скопирован'); // Выводим сообщение об успешном копировании
        })
        .catch(err => {
            console.error('Ошибка при копировании текста: ', err); // Обрабатываем ошибку, если копирование не удалось
        });
});

copyText.addEventListener('mouseover', function() {
    this.style.cursor = 'pointer';
});

function toggleCollapse(elementId) 
{
    var content = document.getElementById(elementId);
    if (content.style.display === "none") 
    {
        content.style.display = "flex"; 
    } 
    else 
    {
        content.style.display = "none"; 
    }
}