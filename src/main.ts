import { createSSRApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import 'style/style-variables.css'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App)

  // Здесь - варианты локализации для всего сайта. Используется i18n и её синтаксис. Для масштабирования проекта эти словари можно вынести в отдельный файл
  const i18n = createI18n({
    locale: 'ru',
    fallbackLocale: 'en',
    messages: {
      ru: {
        message: {
          'main-title-1': 'Доверь $SOL нашему валидатору.',
          'main-title-2': 'Стань частью мощной блокчейн-сети.',
          'stake-block-title': 'Давай застейкаем!',
          'stake-block-instructions': 'В кошельке найди раздел "Стейкинг", создай стейк-аккаунт и введи этот адрес, чтобы начать зарабатывать:',
          'crypto-address-copy-success': 'Адрес скопирован в буфер обмена',
          'header-menu-home': 'Главная',
          'header-menu-services': 'Услуги',
          'header-menu-about': 'О нас',
          'company-info-text': 'Занимаемся стейкингом крипты с 2024 года.',
          'all-rights-reserved-text': 'SolaValidator. Все права не защищены.',
          'about-us-block-1-title': 'Кто мы?',
          'about-us-block-1-text': 'Мы - SolaValidator. Занимаемся стейкингом крипты с 2024 года. Кстати, в этом разделе сайта для заполнения пустоты используется рыба-текст.',
          'about-us-block-2-title': 'Почему мы?',
          'about-us-block-2-text': 'У нас быстрый и надёжный валидатор. Товарищи! начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.',
          'about-us-block-3-title': 'Как мы работаем?',
          'about-us-block-3-text': 'Мы - онлайн-сервис, однако вы всегда можете обратиться в нашу службу поддержки или написать нам на почту. Идейные соображения высшего порядка, а также сложившаяся структура организации позволяет оценить значение форм развития.',
          'service-block-1-title': 'Стейкинг',
          'service-block-1-text': 'Вложи крипту и заработай проценты. Просто и надёжно.',
          'service-block-2-title': 'Анстейкинг',
          'service-block-2-text': 'Выведи вложенные средства в любой момент. Забери заработанные проценты.',
          'service-block-3-title': 'Разнообразие',
          'service-block-3-text': 'Не только $SOL. У нас есть валидаторы для 100+ токенов.',
          'service-block-4-title': 'Проекты',
          'service-block-4-text': 'Разработка индивидуальных инвестиционных проектов под ваши задачи и бюджет.',
          'service-block-5-title': 'Безопасность',
          'service-block-5-text': 'Международные стандарты безопасности для защиты ваших персональных данных и средств.',
          'service-block-6-title': 'Поддержка',
          'service-block-6-text': 'Отзывчивая служба поддержки готова прийти на помощь 24/7 по удобному каналу связи.',
          'contact-block-title': 'Наши контакты',
          'contact-block-text': 'Вы всегда можете написать нам:',
          'contact-form-input-name': 'Ваше имя',
          'contact-form-input-email': 'Ваш email',
          'contact-form-input-message': 'Ваше сообщение',
          'contact-submit-button': 'Отправить',
        }
      }, 
      en: {
        message: {
          'main-title-1': 'Stake $SOL with our trusted validator.',
          'main-title-2': 'Become a part of the powerful blockchain network.',
          'stake-block-title': 'Lets stake!',
          'stake-block-instructions': 'In your wallet go to the Staking section, make a stake account and use this address to start staking:',
          'crypto-address-copy-success': 'Address copied to clipboard',
          'header-menu-home': 'Home',
          'header-menu-services': 'Services',
          'header-menu-about': 'About us',
          'company-info-text': 'Doing crypto staking since 2024.',
          'all-rights-reserved-text': 'SolaValidator. All rights are not reserved.',
          'about-us-block-1-title': 'Who we are?',
          'about-us-block-1-text': 'We are SolaValidator. Doing crypto staking since 2024. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          'about-us-block-2-title': 'Why we?',
          'about-us-block-2-text': 'We are fast and reliable validator. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          'service-block-1-title': 'Staking',
          'service-block-1-text': 'Stake crypto and earn rewards. Simple and reliable.',
          'service-block-2-title': 'Unstaking',
          'service-block-2-text': 'Withdraw crypto at any time. Get your rewards.',
          'service-block-3-title': 'Variety',
          'service-block-3-text': 'Not just $SOL. We have validators for 100+ tokens.',
          'service-block-4-title': 'Projects',
          'service-block-4-text': 'Development of individual investment projects for your needs and budget.',
          'service-block-5-title': 'Security',
          'service-block-5-text': 'International standards of security for protection of your personal data and crypto assets.',
          'service-block-6-title': 'Support',
          'service-block-6-text': 'Our support team is always ready to help.',
          'contact-block-title': 'Our contacts',
          'contact-block-text': 'Stay in touch with us:',
          'contact-form-input-name': 'Your name',
          'contact-form-input-email': 'Your email',
          'contact-form-input-message': 'Your message',
          'contact-submit-button': 'Send'
        }
      }
    }
  })

  app.use(i18n)
  return { app }
}
