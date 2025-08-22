import ServicesPageClient from './servicesPageClient'

export const metadata = {
    title: 'Наличие сервисов со скидками в AbbsNet',
    description: "Просмотрите наличие сервисов, которые можно приобрести со скидкой в AbbsNet",
    keywords: ['доступ', 'сервисы', 'нейросети', 'безопасный доступ', 'быстрый доступ', 'недорогой доступ'],
    openGraph: {
        title: 'Наличие сервисов со скидками в AbbsNet',
        description: 'Просмотрите наличие сервисов, которые можно приобрести со скидкой в AbbsNet',
        url: 'https://abbsnet.com/services',
        type: 'website',
        siteName: 'AbbsNet',
    },
}

const Services = () => {
    return <ServicesPageClient />
}

export default Services