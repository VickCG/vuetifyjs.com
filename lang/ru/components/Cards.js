export default {
  header: 'Card',
  headerText: 'Компонент `v-card` - это универсальный компонент, который может использоваться для чего угодно: от панели до статического изображения. Компонент **card** имеет множество вспомогательных компонентов, чтобы сделать разметку максимально простой. Компоненты, которые не имеют перечисленных опций, используют функциональный компонент **Vue** для ускоренного рендеринга и служат в качестве простой разметки, чтобы упростить компоновку элементов.',
  components: [
    'v-card',
    'v-card-media',
    'v-card-title',
    'v-card-actions'
  ],
  examples: [{
    components: {
      header: 'Компоненты',
      desc: 'Card имеет 4 основных компонента: `v-card-media`, `v-card-title`, `v-card-text` и `v-card-actions`.'
    },
    mediaWithText: {
      header: 'Медиа с текстом',
      desc: 'Используя систему компоновки, мы можем добавить пользовательский текст в любом месте фона.'
    },
    horizontal: {
      header: 'Горизонтальные карты',
      desc: 'Используя `v-flex`, вы можете создавать настраиваемые горизонтальные карты. Используйте свойство `contain`, чтобы сжать `v-card-media`, чтобы поместиться внутри контейнера вместо перекрытия.'
    },
    grids: {
      header: 'Grids',
      desc: 'Используя сетки, вы можете создавать красивые макеты.'
    },
    customActions: {
      header: 'Пользовательские действия',
      desc: 'С помощью простого условия вы можете легко добавить дополнительный текст, который скрыт до открытия.'
    }
  }],
  props: {
    contain: 'Измените размер фона, который нужно сохранить.',
    flat: 'Удаляет тень карты',
    height: 'Вручную укажите высоту карты',
    hover: 'Применить более высокий уровень при наведении',
    img: 'Задает фон изображения',
    primaryTitle: 'Применяет основное заполнение заголовка.',
    raised: 'Задает более высокий уровень по умолчанию',
    src: 'Изображение для отображения в качестве фона.',
    tile: 'Поверните карту в плитку, удалив радиус границы'
  }
}