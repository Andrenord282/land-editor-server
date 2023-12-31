import { TCountryCode } from "compileModule/types";

type TNameLists = {
    [key in TCountryCode]: TNameList;
};

type TNameList = {
    man: { firstName: string[]; secondName: string[]; fullName: string[] };
    woman: { firstName: string[]; secondName: string[]; fullName: string[] };
    length: number;
};

type TOutNameList = {
    man: string[];
    woman: string[];
};

const nameList: TNameLists = {
    RU: {
        man: {
            firstName: [
                "Александр",
                "Алексей",
                "Анатолий",
                "Андрей",
                "Антон",
                "Аркадий",
                "Арсений",
                "Артём",
                "Борис",
                "Вадим",
                "Валентин",
                "Валерий",
                "Василий",
                "Виктор",
                "Виталий",
                "Владимир",
                "Владислав",
                "Григорий",
                "Даниил",
                "Денис",
                "Дмитрий",
                "Евгений",
                "Иван",
                "Игорь",
                "Илья",
                "Кирилл",
                "Константин",
                "Лев",
                "Леонид",
                "Максим",
                "Михаил",
                "Никита",
                "Николай",
                "Олег",
                "Павел",
                "Пётр",
                "Роман",
                "Семён",
                "Сергей",
                "Станислав",
            ],
            secondName: [
                "Алексеев",
                "Антонов",
                "Беляев",
                "Борисов",
                "Васильев",
                "Волков",
                "Гаврилов",
                "Григорьев",
                "Дмитриев",
                "Егоров",
                "Ефимов",
                "Захаров",
                "Зиновьев",
                "Иванов",
                "Карпов",
                "Кириллов",
                "Кузнецов",
                "Лебедев",
                "Максимов",
                "Марков",
                "Матвеев",
                "Михайлов",
                "Никитин",
                "Орлов",
                "Петров",
                "Поляков",
                "Попов",
                "Романов",
                "Савельев",
                "Сергеев",
                "Сидоров",
                "Симонов",
                "Смирнов",
                "Соколов",
                "Тимофеев",
                "Федоров",
                "Харитонов",
                "Хохлов",
                "Чернов",
                "Шестаков",
            ],
            fullName: [],
        },
        woman: {
            firstName: [
                "Александра",
                "Алина",
                "Алиса",
                "Алла",
                "Анастасия",
                "Ангелина",
                "Анна",
                "Валентина",
                "Валерия",
                "Варвара",
                "Василиса",
                "Вероника",
                "Виктория",
                "Галина",
                "Дарья",
                "Евгения",
                "Екатерина",
                "Елена",
                "Елизавета",
                "Жанна",
                "Зинаида",
                "Зоя",
                "Инга",
                "Инесса",
                "Ирина",
                "Карина",
                "Кира",
                "Ксения",
                "Лариса",
                "Лидия",
                "Лилия",
                "Любовь",
                "Майя",
                "Маргарита",
                "Марина",
                "Мария",
                "Надежда",
                "Наталья",
                "Оксана",
                "Ольга",
            ],
            secondName: [
                "Абрамова",
                "Авдеева",
                "Андреева",
                "Анисимова",
                "Белова",
                "Беляева",
                "Борисова",
                "Васильева",
                "Волкова",
                "Григорьева",
                "Данилова",
                "Денисова",
                "Дмитриева",
                "Егорова",
                "Ефимова",
                "Зайцева",
                "Захарова",
                "Зимина",
                "Иванова",
                "Игнатова",
                "Казакова",
                "Карпова",
                "Кириллова",
                "Козлова",
                "Колесникова",
                "Комарова",
                "Кузнецова",
                "Куликова",
                "Лебедева",
                "Макарова",
                "Максимова",
                "Михайлова",
                "Никитина",
                "Орлова",
                "Павлова",
                "Петрова",
                "Романова",
                "Савина",
                "Сидорова",
                "Соколова",
            ],
            fullName: [],
        },
        get length() {
            return Math.min(
                this.man.firstName.length,
                this.man.secondName.length,
                this.woman.firstName.length,
                this.woman.secondName.length
            );
        },
    },
    KZ: {
        man: {
            firstName: [
                "Абай",
                "Данияр",
                "Ербол",
                "Еркебулан",
                "Кайрат",
                "Касым",
                "Акназар",
                "Алексей",
                "Алим",
                "Алихан",
                "Алмаз",
                "Альберт",
                "Аманжол",
                "Нурбек",
                "Нұрсұлтан",
                "Рахат",
                "Руслан",
                "Аскар",
                "Айбек",
                "Айдар",
                "Акжол",
                "Акмарал",
                "Мейрамбек",
                "Асылбек",
                "Бауыржан",
                "Бексултан",
                "Абзал",
                "Абылай",
                "Берик",
                "Куаныш",
                "Марат",
                "Адиль",
                "Азамат",
                "Санжар",
                "Серик",
                "Ануар",
                "Ардак",
                "Арман",
                "Талгат",
                "Шынгыс",
            ],
            secondName: [
                "Абдиров",
                "Байбосынов",
                "Батырханов",
                "Бекболатов",
                "Сапарбаев",
                "Серикбаев",
                "Смагулов",
                "Токтаганов",
                "Тургамбаев",
                "Турсунбаев",
                "Калиев",
                "Кадырбеков",
                "Казыбеков",
                "Казымов",
                "Кайратулы",
                "Мухамеджанов",
                "Орынбасаров",
                "Рыскулов",
                "Сабыржанов",
                "Кенжебеков",
                "Кожахметов",
                "Куанышбеков",
                "Кулмагамбетов",
                "Мусабаев",
                "Мусинов",
                "Дуйсенов",
                "Ермаганбетов",
                "Есенгалиев",
                "Имангалиев",
                "Шарипов",
                "Жакупов",
                "Жанболатов",
                "Жангельдин",
                "Абдукаримов",
                "Абишев",
                "Алдабергенов",
                "Аубакиров",
                "Жумабаев",
                "Каиргалиев",
                "Каримов",
            ],
            fullName: [],
        },

        woman: {
            firstName: [
                "Карина",
                "Кульжан",
                "Мадина",
                "Мәлике",
                "Мәриям",
                "Назерке",
                "Назира",
                "Нұржанат",
                "Айсылу",
                "Айым",
                "Акбота",
                "Алтынай",
                "Амина",
                "Нұрлан",
                "Раушан",
                "Айсулу",
                "Анар",
                "Зарина",
                "Зейнеп",
                "Инжу",
                "Камшат",
                "Сауле",
                "Адина",
                "Ажара",
                "Айгуль",
                "Айжан",
                "Айлара",
                "Асем",
                "Асылхан",
                "Дана",
                "Динара",
                "Жазира",
                "Жанар",
                "Айнур",
                "Айсерке",
                "Софья",
                "Тамара",
                "Фатима",
                "Шолпан",
                "Дана",
            ],
            secondName: [
                "Куанышбекова",
                "Кулмагамбетова",
                "Мусабаева",
                "Мусинова",
                "Мухамеджанова",
                "Орынбасарова",
                "Батырханова",
                "Казыбекова",
                "Казымова",
                "Кайратулы",
                "Калиева",
                "Кенжебекова",
                "Кожахметова",
                "Рыскулова",
                "Сабыржанова",
                "Сапарбаева",
                "Абдирова",
                "Абдукаримова",
                "Абишева",
                "Тургамбаева",
                "Турсунбаева",
                "Шарипова",
                "Жакупова",
                "Жанболатова",
                "Алдабергенова",
                "Аубакирова",
                "Байбосынова",
                "Серикбаева",
                "Смагулова",
                "Токтаганова",
                "Жангельдинова",
                "Жумабаева",
                "Каиргалиева",
                "Каримова",
                "Бекболатова",
                "Дуйсенова",
                "Ермаганбетова",
                "Есенгалиева",
                "Имангалиева",
                "Кадырбекова",
            ],
            fullName: [],
        },
        get length() {
            return Math.min(
                this.man.firstName.length,
                this.man.secondName.length,
                this.woman.firstName.length,
                this.woman.secondName.length
            );
        },
    },
    UZ: {
        man: {
            firstName: [
                "Абдуллах",
                "Абдулхаким",
                "Аброр",
                "Аваз",
                "Азиз",
                "Азим",
                "Алишер",
                "Алмаз",
                "Амин",
                "Амир",
                "Ахмад",
                "Ашраф",
                "Баходир",
                "Бахтиёр",
                "Бахтовар",
                "Бахтыёр",
                "Бегзод",
                "Бобур",
                "Ботир",
                "Валид",
                "Валижон",
                "Васий",
                "Вохид",
                "Гулом",
                "Давлат",
                "Джавохир",
                "Джамшед",
                "Джахонгир",
                "Дилшод",
                "Дониёр",
                "Икром",
                "Ильхом",
                "Исмаил",
                "Камолиддин",
                "Комил",
                "Лазиз",
                "Мирзо",
                "Мурад",
                "Насрин",
                "Нурлан",
            ],
            secondName: [
                "Бегимбаев",
                "Бошкаев",
                "Гафуров",
                "Ганиев",
                "Джураев",
                "Дустмухаммедов",
                "Жумабоев",
                "Зафаров",
                "Зуфаров",
                "Ибрагимов",
                "Исаев",
                "Камбаров",
                "Каракулов",
                "Каримов",
                "Комилов",
                "Махмудов",
                "Мирзаев",
                "Мирзияев",
                "Мухаммадов",
                "Наврузов",
                "Назаров",
                "Насимов",
                "Насыров",
                "Отамуратов",
                "Очилов",
                "Пардаев",
                "Пиримбаев",
                "Равшанов",
                "Рустамов",
                "Сабиров",
                "Сайфуллаев",
                "Салимов",
                "Сатторов",
                "Сафаров",
                "Тухтамышев",
                "Умаров",
                "Файзиев",
                "Фармонов",
                "Хайдаров",
                "Шарипов",
            ],
            fullName: [],
        },

        woman: {
            firstName: [
                "Адолат",
                "Айгуль",
                "Айнур",
                "Айтур",
                "Акбара",
                "Амина",
                "Анвара",
                "Аруслана",
                "Бибисора",
                "Гулбарга",
                "Гулистан",
                "Гульноза",
                "Дилнооза",
                "Дилшода",
                "Дилфуза",
                "Зухра",
                "Ирма",
                "Лола",
                "Мавжуда",
                "Малика",
                "Маржона",
                "Маржонгуль",
                "Муноаввара",
                "Муниса",
                "Назокат",
                "Насиба",
                "Нигина",
                "Нисо",
                "Нодира",
                "Оксана",
                "Олма",
                "Рукия",
                "Саида",
                "Салима",
                "Ситора",
                "Сурайё",
                "Тахмина",
                "Фарида",
                "Фирдавса",
                "Хадижа",
            ],
            secondName: [
                "Баходирова",
                "Бошкаева",
                "Ганиева",
                "Гафурова",
                "Джураева",
                "Дустмухаммедова",
                "Жумабоева",
                "Зафарова",
                "Зуфарова",
                "Ибрагимова",
                "Исаева",
                "Камбарова",
                "Каракулова",
                "Каримова",
                "Комилова",
                "Махмудова",
                "Мирзаева",
                "Мирзияева",
                "Мухаммадова",
                "Наврузова",
                "Назарова",
                "Насимова",
                "Насырова",
                "Отамуратова",
                "Очилова",
                "Пардаева",
                "Пиримбаева",
                "Равшанова",
                "Рустамова",
                "Сабирова",
                "Сайфуллаева",
                "Салимова",
                "Сатторова",
                "Сафарова",
                "Тухтамышева",
                "Умарова",
                "Файзиева",
                "Фармонова",
                "Хайдарова",
                "Шарипова",
            ],
            fullName: [],
        },
        get length() {
            return Math.min(
                this.man.firstName.length,
                this.man.secondName.length,
                this.woman.firstName.length,
                this.woman.secondName.length
            );
        },
    },
    TJ: {
        man: {
            firstName: [
                "Абдулла",
                "Абделькрим",
                "Абдельмалик",
                "Абдельрахман",
                "Абдеррахим",
                "Абдеслам",
                "Абди",
                "Абдулкарим",
                "Абдулмалик",
                "Абдулрахман",
                "Абдусалам",
                "Абдул",
                "Адам",
                "Ахмед",
                "Али",
                "Амир",
                "Амин",
                "Асад",
                "Брахим",
                "Гани",
                "Давуд",
                "Хамза",
                "Хасан",
                "Хусейн",
                "Ибрагим",
                "Идрис",
                "Исмаил",
                "Джафар",
                "Кадир",
                "Карим",
                "Латиф",
                "Махмуд",
                "Мехди",
                "Мустафа",
                "Насир",
                "Нури",
                "Омар",
                "Рашид",
                "Самир",
                "Ясин",
            ],
            secondName: [
                "Сулаймони",
                "Азизи",
                "Баротов",
                "Вахобов",
                "Джамоли",
                "Жафари",
                "Исмоилов",
                "Каримов",
                "Латифи",
                "Мирзоев",
                "Набиев",
                "Олимов",
                "Рахими",
                "Саидов",
                "Турсунов",
                "Умаров",
                "Файзи",
                "Хамзаев",
                "Хасанов",
                "Худойбердиев",
                "Чороев",
                "Шарифов",
                "Эргашев",
                "Якубов",
                "Яминов",
                "Абдуллахи",
                "Алиев",
                "Амири",
                "Асламов",
                "Бекмуродов",
                "Бобоев",
                "Бурхонов",
                "Давлатов",
                "Дустмуродов",
                "Зохидов",
                "Ибрагимов",
                "Исоев",
                "Камилов",
                "Махмудов",
                "Мухиддинов",
                "Самиев",
                "Темуров",
            ],
            fullName: [],
        },

        woman: {
            firstName: [
                "Азиза",
                "Бахор",
                "Гулистон",
                "Дилором",
                "Зарина",
                "Индира",
                "Камила",
                "Лейла",
                "Мадина",
                "Назира",
                "Ольга",
                "Парвина",
                "Рушана",
                "Сабина",
                "Тахмина",
                "Умида",
                "Фарзона",
                "Хумоира",
                "Цоя",
                "Чолпон",
                "Шахноза",
                "Эльмира",
                "Юлдуз",
                "Ягья",
                "Аида",
                "Амина",
                "Анора",
                "Бахтиёра",
                "Василиса",
                "Гульнара",
                "Диана",
                "Зарифа",
                "Инесса",
                "Ксения",
                "Лола",
                "Марго",
                "Нигора",
                "Ойбар",
                "Парвиза",
                "Рахима",
                "Салима",
                "Тамара",
            ],
            secondName: [
                "Султонова",
                "Алиева",
                "Рашидова",
                "Каримова",
                "Хамзаева",
                "Исмоилова",
                "Азизова",
                "Мирзоева",
                "Набиева",
                "Олимова",
                "Турсунова",
                "Шарифова",
                "Джамолиева",
                "Жафариева",
                "Бурхонова",
                "Файзиева",
                "Хасанова",
                "Баротова",
                "Умарова",
                "Яминова",
                "Аминова",
                "Асламова",
                "Бекмуродова",
                "Бобоева",
                "Давлатова",
                "Дустмуродова",
                "Зохидова",
                "Ибрагимова",
                "Исоева",
                "Камилова",
                "Махмудова",
                "Мухиддинова",
                "Рахимиева",
                "Саидова",
                "Темурова",
                "Чороева",
                "Эргашева",
                "Якубова",
                "Абдуллахиева",
                "Амириева",
                "Нигораева",
                "Тамараева",
            ],
            fullName: [],
        },
        get length() {
            return Math.min(
                this.man.firstName.length,
                this.man.secondName.length,
                this.woman.firstName.length,
                this.woman.secondName.length
            );
        },
    },
    KG: {
        man: {
            firstName: [
                "Абдылда",
                "Абдымамат",
                "Абылай",
                "Адыл",
                "Азамат",
                "Айбек",
                "Айдар",
                "Акжол",
                "Алмаз",
                "Алтынбек",
                "Амантур",
                "Асан",
                "Асылбек",
                "Асылкан",
                "Асылкожо",
                "Асылхан",
                "Ахмат",
                "Бакыт",
                "Бегимбек",
                "Бекболот",
                "Бекназар",
                "Бектияр",
                "Данияр",
                "Дастан",
                "Жайылоба",
                "Жалал",
                "Жанар",
                "Жаныбек",
                "Ибрагим",
                "Кайрат",
                "Кубанычбек",
                "Кулубек",
                "Медер",
                "Мирлан",
                "Мукталы",
                "Нурбек",
                "Орозбек",
                "Рахмат",
                "Садык",
                "Сайраш",
                "Таалай",
                "Тилек",
            ],
            secondName: [
                "Абдураимов",
                "Абдылдаев",
                "Абылов",
                "Адылов",
                "Азимов",
                "Айтматов",
                "Акаев",
                "Алмазов",
                "Аманов",
                "Анваров",
                "Асанов",
                "Асылбеков",
                "Атабеков",
                "Байматов",
                "Бакиров",
                "Батыров",
                "Бектуров",
                "Болотов",
                "Борубаев",
                "Бурханов",
                "Джекшенов",
                "Дуйшенов",
                "Жапаров",
                "Жолдошов",
                "Жоломоев",
                "Ибрагимов",
                "Касымов",
                "Курманов",
                "Матраимов",
                "Мусаев",
                "Орозбеков",
                "Рахимов",
                "Сагынбеков",
                "Сатыбалдиев",
                "Султанов",
                "Токтогулов",
                "Турсунбеков",
                "Усонов",
                "Чолпонбаев",
                "Шамшиев",
                "Эргешов",
                "Юсупов",
            ],
            fullName: [],
        },

        woman: {
            firstName: [
                "Тайгуль",
                "Динара",
                "Лиана",
                "Ульзия",
                "Шолпан",
                "Бегимай",
                "Ырысбубу",
                "Йылдыз",
                "Элмира",
                "Юсуп",
                "Халима",
                "Инкар",
                "Кылым",
                "Орозгул",
                "Нуржамал",
                "Раушан",
                "Фатима",
                "Мадина",
                "Зарема",
                "Гульмира",
                "Чынара",
                "Сайкал",
                "Эльзара",
                "Яна",
                "Цыпа",
                "Аида",
                "Парижан",
                "Сания",
                "Венера",
                "Жаныл",
                "Маржан",
                "Эсмира",
                "Римма",
                "Гульзира",
                "Камила",
                "Лейла",
                "Нургуль",
                "Умида",
                "Ясмина",
                "Шамиля",
                "Хуршед",
                "Эмилия",
            ],
            secondName: [
                "Абдыкадырова",
                "Бекматова",
                "Васильева",
                "Гуламова",
                "Джумабекова",
                "Ермекова",
                "Жакшыбекова",
                "Зейнетдинова",
                "Исабекова",
                "Касымова",
                "Лазарева",
                "Муратова",
                "Нарынова",
                "Орозбекова",
                "Парманова",
                "Расулова",
                "Сагындыкова",
                "Таштанова",
                "Усенова",
                "Федорова",
                "Хамидова",
                "Чыналыева",
                "Шаймарданова",
                "Эркинова",
                "Юсупова",
                "Якупова",
                "Абызбаева",
                "Борубаева",
                "Валиева",
                "Газизова",
                "Джекшенова",
                "Ешимова",
                "Жумакадырова",
                "Замирова",
                "Исакова",
                "Калматова",
                "Латыпова",
                "Мырзагулова",
                "Нурбаева",
                "Осмонова",
                "Пырмаева",
                "Рустамова",
                "Сыдыкова",
            ],
            fullName: [],
        },
        get length() {
            return Math.min(
                this.man.firstName.length,
                this.man.secondName.length,
                this.woman.firstName.length,
                this.woman.secondName.length
            );
        },
    },
};

const shuffle = (array: number[]) => {
    for (let i = array.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const setFullName = (geo: TCountryCode): TOutNameList => {
    const indexFirstName = [];
    const indexLastName = [];

    for (let i = 0; i < nameList[geo].length; i++) {
        indexFirstName.push(i);
        indexLastName.push(i);
    }

    shuffle(indexFirstName);
    shuffle(indexLastName);

    for (let i = 0; i <= nameList[geo].length - 1; i++) {
        nameList[geo].man.fullName.push(
            `${nameList[geo].man.firstName[indexFirstName[i]]} ${nameList[geo].man.secondName[indexFirstName[i]]}`
        );
        nameList[geo].woman.fullName.push(
            `${nameList[geo].woman.firstName[indexFirstName[i]]} ${nameList[geo].woman.secondName[indexFirstName[i]]}`
        );
    }

    return {
        man: nameList[geo].man.fullName,
        woman: nameList[geo].woman.fullName,
    };
};

export { setFullName };
