'use client'
import { useState } from 'react';
import styles from '../styles/Support.module.scss'
import Image from 'next/image';
import chevronDown from '../../../public/down-chevron.svg'
import chevronUp from '../../../public/chevronUp.svg'

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const accountingQuestions = [
    { question: 'Работаем ли мы с НДС?', answer: 'Наша компания работает на общей системе налогообложения. Все цены на нашем сайте или в официальных каналах продаж указаны с НДС.' },
    { question: 'Как получить акт-сверки?', answer: 'Акт сверки вы можете запросить в нашей бухгалтерии по электронной почте ' },
    { question: 'Как вернуть денежные средства?', answer: 'Скачайте заявление на возврат денежных средств слева, заполните, подпишите и поставьте печать. Отправьте скан на почту buhsg@servergate.ru , а оригинал по адресу г. Москва, ул. Профсоюзная, д. 57, офис 700, с пометкой "В бухгалтерию Сервер Гейт".' },
    { question: 'Отображается ли в чеке ФИО покупателя?', answer: 'При оплате счёта через интернет-эквайринг физическим лицом, сначала мы выставляем счёт физическому лицу, где указывается ФИО, наименование товара и его стоимость. Далее физическое лицо оплачивает счёт через интернет-эквайринг согласно основанию. В этом случае основанием является счёт на оплату. После оплаты физическое лицо сообщает об оплате, получает на почту чек от банка и оператора фискальных данных, что платёж успешно проведен. Таким образом в чеке ФИО покупателя фигурировать не будет, но будет в упрощённом передаточном документе (УПД).' },
    { question: 'Можно ли оплатить переводом на карту?', answer: 'Нет. Сотрудники нашей компании никогда не просят перевести деньги на карту и тем более данные ваших банковских карт. Все расчёты производятся согласно действующему законодательству РФ с предоставлением соответствующих сопроводительных документов.' },
    { question: 'Какие документы необходимы нам для вычета НДС?', answer: 'Если вы находитесь на территории другого государства, то мы можем вычесть НДС, который был уплачен при ввозе на территорию Российской Федерации. Для этого, после отгрузки, пришлите нам оригиналы следующих документов: 1. Заявление о ввозе товара на территорию страны и уплате косвенных налогов, оригинал. 2. Подписанный универсальный передаточный документ, оригинал. 3. Подписанный договор поставки, оригинал. 4. Транспортная накладная. 5. Договор с транспортной компанией.' },
    { question: 'Используем ли мы ЭДО?', answer: 'Да, вы можете отправить приглашение нам в Диадок, после акцептирования, мы сможем начать обмен документами.' },
    { question: 'Как вернуть денежные средства?', answer: 'Приём наличных платежей согласно действующему законодательству обязывает компании иметь кассовый аппарат и регулярно его обслуживать. В связи с этим мы отказались от использования наличных в пользу интернет-эквайринга. Это удобно, безопасно, а самое главное - абсолютно прозрачно для всех, включая регулирующие органы.' },
    { question: 'Что нужно иметь при себе при получении товаров?', answer: 'Если вы планируете забрать товары самостоятельно из нашего офиса, то вам потребуются:1) документ удостоверяющий личность; 2) печать или доверенность (по форме М2, М2А заверенная печатью).' }
  ];

  const legalQuestions = [
    { question: 'Какие документы нужны для передачи оборудования?', answer: 'Если наша инженерная служба не может произвести диагностику удалённо (что происходит очень редко), то, к сожалению, оборудование нужно продиагностировать очно, с использованием запасных компонентов и специальной диагностической аппаратуры. Для того чтобы передать нам оборудование, нам потребуется подписать акт приёма-передачи вместе с копией УПД и гарантийным талоном на ваше оборудование. Образец акта приёма-передачи можно найти на этой странице в блоке файлов - Юридические вопросы.' },
    { question: 'Как запросить копии учредительных документов?', answer: 'Копии учредительных документов вы можете запросить у вашего менеджера или в бухгалтерии по адресу: buhsg@servergate.ru' },
    { question: 'Как увидеть условия вашей гарантии?', answer: 'Вы можете посмотреть образец гарантийного талона вы можете на этой странице в блоке файлов - Юридические вопросы.' },
    { question: 'Как заключить договор поставки?', answer: 'Договор поставки мы заключаем если сумма сделки превышает 1.5 млн рублей, в иных случаях мы используем счёт-договор, который имеет такую же юридическую силу, как и обычный договор поставки.' },
    { question: 'Как внести изменения в договор поставки?', answer: 'Ваши юристы могут составить протокол разногласий и оформить его отдельным приложением к договору. Прямые изменения в договоре недопустимы.' }
  ]

 

  const serverQuestions = [
    { question: 'Что делать если память работает на пониженной частоте?', answer: 'Вероятнее всего вы установили оперативную память, частота которой отличается от установленных ранее. Мы рекомендуем извлечь установленный модуль и использовать оперативную память только той модели и частоты, что были установлены в сервере ранее.' },
    { question: 'Заменил процессор. Как правильно намазать термопасту?', answer: 'Есть распространённый миф - чем больше термопасты, тем лучше. Но это миф, потому что термопасты нужно совсем немного:Наносить термопасту нужно очень аккуратно, лучше использовать шприц или специальный шпатель.' },
    { question: 'Что делать если ESXi падает в PSOD?', answer: 'Проблема может крыться в различных местах, начиная от неправильной установки ESXi, до сгоревшей материнской платы. Чтобы исключить аппаратные проблемы:1. Попробуйте использовать только 1 процессор и слоты памяти A.2. Попробуйте поменять процессоры местами и память между слотами А и В.3. Если манипуляции 1 и 2 не привели к успеху, то проблема либо в неправильной работе ESXi, либо в материнской плате, которую необходимо заменить.Для замены материнской платы, заполните форму на получение технической поддержки.' },
    { question: 'Что делать если диск не работает и статус Degradate?', answer: 'Скорее всего проблема в самом жёстком диске, который мог быть повреждён при транспортировке или других обстоятельствах. Заполните форму выше, чтобы техническая поддержка осуществила замену диска, если он находится на гарантии.' },
    { question: 'Как часто нужно менять термопасту?', answer: 'Если сборку делали наши сотрудники, то можете забыть про этот вопрос на длительное время. Мы используем термопасту ARCTIC MX-4, срок службы которой составляет 8 лет. ' },
    { question: 'Какой логин и пароль от iDRAC?', answer: 'Чтобы попасть в iDRAC вашего сервера, используйте логин root, а пароль calvin. Данная комбинация действительна для серверов, приобретенных в нашей компании.' },
    { question: 'iDRAC недоступен, что делать?', answer: 'В первую очередь стоит проверить соединение, но если с соединением всё в порядке, то подключитесь к серверу напрямую и попробуйте в BIOS переключить iDRAC в режим Shared с первым сетевым портом. Если на первом порту у вас появится доступ к iDRAC, то скорее всего умер выделенный порт под iDRAC и требуется замена материнской платы.' },
    { question: 'Ошибка Е1410 при запуске', answer: 'Вероятнее всего вы обновили конфигурацию сервера, установив в него другой или другие процессоры. Обратите внимание на сокет CPU 1, не загнуты ли ножки сокета, которые прилегают к процессору?' },
    { question: 'Порт VGA не работает, но в iDRAC всё в порядке', answer: 'Если отсутствует изображение на экране через VGA порт, а в iDRAC всё в порядке, то скорее всего, функция Local Video сервера находится в состоянии Disabled.' },
    { question: 'Какие видеокарты поддерживает платформа C4130?', answer: 'Платформа C4130 поддерживает видеокарты NVIDIA TESLA K80, NVIDIA GRID K1, NVIDIA GRID K2. Обратите внимание, что платформа поддерживает только 3 видеокарты NVIDIA GRID K1, согласно официальной документации.' },
    { question: 'Какой логин и пароль от iLO?', answer: 'Чтобы попасть в iLO, используйте логин Administrator, а пароль вы всегда сможете найти на крышке вашего сервера.' },
    { question: 'Можно ли собрать RAID из NVMe дисков на HPE Gen10?', answer: 'NVMe общается с процессором напрямую через PCI, за счёт чего сервер получает супер низкий Latency и высокую скорость, а SAS/SATA диски сначала обращаются к экспандеру, далее к контроллеру (если есть кеш, то ещё и к кешу), где мы автоматически теряем в скорости из-за протокола и самого контроллера в связке с экспандером. Только потом идёт обращение к PCI, а далее к CPU.  Добавлять кеш к NVMe нет никакого смысла, это будет только потеря в скорости и Latency. Если всё же очень нужно собрать RAID из NVMe дисков, то можно через UEFI грузить операционную систему и параллельно собирать диски в RAID. По итогу мы загрузим систему уже с дисками, собранными в RAID. Во всех остальных случаях - сначала мы грузим систему с диска, потом будет грузиться RAID.' },
    { question: 'Что нужно сделать чтобы сервер увидел жесткие диски в сервере HP?', answer: 'Необходимо произвести настройку RAID-массива через HPE Smart Storage Administrator. Нажмите на клавишу F9 во время загрузки, далее выберите System Configuration, в списке устройств выбрать меню вашего RAID-контроллера и в нем пункт "Exit and launch HP Smart Storage Administrator (HPSSA)". Далее в появившемся меню следует выбрать HPE Smart Storage Administrator и дождаться его загрузки. Выберите ваш контроллер и создайте RAID-массив или несколько массивов.' },
    { question: 'Можем ли мы помочь удалённо?', answer: 'При наступлении гарантийного случая для диагностики проблемы нам потребуется доступ к модулю удалённого администрирования. Если предоставить прямой доступ не получится, то мы можем воспользоваться программой AnyDesk. Программу TeamViewer наши инженеры не используют.' },
    { question: 'Поддерживают ли ML350 Gen8 видеокарты NVIDIA RTX?', answer: 'Увы, но нет. Hewlett Packard установило ограничения по использованию видеокарт серии RTX в серверах ML восьмого поколения.' },
];

  const handleToggle = (category, index) => {
    const uniqueIndex = `${category}-${index}`; 
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(uniqueIndex)
        ? prevIndexes.filter((item) => item !== uniqueIndex)
        : [...prevIndexes, uniqueIndex]
    );
  };

  const renderQuestions = (category, questions) => (
    <div className={styles.question__blocks}>
      {questions.map((item, index) => {
        const uniqueIndex = `${category}-${index}`; 
        return (
          <div key={uniqueIndex} className={styles.faq_item}>
            <div className={styles.faq_question} onClick={() => handleToggle(category, index)}>
              <span>{item.question}</span>
              <Image 
                src={openIndexes.includes(uniqueIndex) ? chevronDown : chevronUp} 
                alt="toggle" 
                className={styles.faq_toggle_img} 
                width={20}
                height={20}
              />
            </div>
            <div className={`faq_answer ${openIndexes.includes(uniqueIndex) ? 'open' : ''}`}>
              {openIndexes.includes(uniqueIndex) && <p>{item.answer}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className={styles.support}>
      <div className="container">
        <div className={styles.support__title}>
            <h1>Поддержка клиентов Server Gate</h1>
            <p>В данном разделе нашего сайта мы собрали ответы на самые популярные вопросы наших покупателей. Если ответа на ваш вопрос здесь нет, то вы можете отправить заявку в техническую поддержку.</p>
        </div>
        
        <h2 className={styles.sectionTitle}>Бухгалтерские вопросы</h2>
        {renderQuestions('accounting', accountingQuestions)}

        <h2 className={styles.sectionTitle}>Юридические вопросы</h2>
        {renderQuestions('legal', legalQuestions)}

         <h2 className={styles.sectionTitle}>Серверные вопросы</h2>
        {renderQuestions('server', serverQuestions)}
        
      </div>
    </section>
  );
};

export default FAQ;
