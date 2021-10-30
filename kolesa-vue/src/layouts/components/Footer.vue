<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__container">
        <div class="footer__links">
          <p>&copy; Kolesa Group</p>
          <div class="footer__social-media">
            <a class="footer__social-media-link" href="#">
              <img
                src="../../assets/images/instagram-icon.svg"
                alt="Иконка Инстаграма"
              />
            </a>
            <a class="footer__social-media-link" href="#">
              <img
                src="../../assets/images/youtube-icon.svg"
                alt="Иконка YouTube"
              />
            </a>
            <a class="footer__social-media-link" href="#">
              <img
                src="../../assets/images/vk-icon.svg"
                alt="Иконка ВКонтакте"
              />
            </a>
          </div>
        </div>
        <div class="footer__action">
          <div class="footer__action-text-container">
            <p class="footer__action-text">Есть идеи что улучшить?</p>
            <p class="footer__action-text">Не знаешь, с кем решить проблему?</p>
          </div>
          <button class="footer__btn" type="button">Написать</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
@import '../../styles/variables';
@import '../../styles/footer';
</style>
