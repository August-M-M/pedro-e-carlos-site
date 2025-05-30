function showHint(text) {
  const tooltip = document.getElementById('tooltip');
  tooltip.innerText = text;
  tooltip.style.display = 'block';

  clearTimeout(tooltip.timer);
  tooltip.timer = setTimeout(() => {
    tooltip.style.display = 'none';
  }, 2000);
}
