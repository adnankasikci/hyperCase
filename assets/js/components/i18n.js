i18next.init({
    lng: localStorage.getItem("selectedLanguage") || "tr",
    resources: {
        en: {
            translation: {
                heradim: "We Are With You Every Step of the Way",
                cozum_merkezi: "Solution Center",
                turk_lang:"Turkish",
                en_lang:"English",
                turk_change:"English",
                nav_anasayfa:"Home",
                nav_envanter:"Inventory",
                nav_iletisim:"Contact",
                banner_title01:"Strengthen Your E-Commerce, Take Your Sales to the Top!",
                banner_description01:"Grow your business with Hyper Technology's innovative e-commerce solutions! Increase your sales and perfect your customer experience with easy integration, advanced tools and reliable infrastructure.",

                banner_title02:"Easily Buy Your Digital Products Now from Hyper Technology and Put Them Up for Sale!",
                banner_description02:"Increase your sales with Hyper Technology's innovative e-commerce software. Reach your goals quickly with easy integration, advanced tools and reliable infrastructure.",

                banner_title03:"Ease and Speed in Selling Physical Products!",
                banner_description03:"Easily offer your physical products for sale with Hyper Technology! Manage all processes from order to delivery effortlessly and grow your business thanks to cargo integrations.",

                banner_title04:"Easily Buy Your Digital Products Now from Hyper Technology and Put Them Up for Sale!",
                banner_description04:"Sell your products easily without keeping stock with our dropshipping supported infrastructure. A safe, fast and profitable sales process awaits you with Hyper Technology.",
                banner_button:"Get Started Now",

                section_title01:"Our Company's Products",
                section_title02:"See Our Other Products",
                section_title03:"Hyper Technology has been providing software and marketing solutions for the E-Commerce sector, especially digital products, since 2006.",
                section_title04:"List Producs",

                footer_title01:"Institutional",
                footer_title02:"Contracts",
                footer_title03:"Contact",
                footer_subtitle01:"About",
                footer_subtitle02:"E-Commerce Packages",
                footer_subtitle03:"App Store",
                footer_subtitle04:"Themes",
                footer_subtitle05:"References",
                footer_subtitle06:"Demo Request",
                footer_subtitle07:"Clarification Text",
                footer_subtitle08:"Privacy Policy",
                footer_subtitle09:"User Agreement",
                footer_subtitle10:"Sales Agreement",
                footer_subtitle11:"Cancellation & Refund Conditions",
                footer_subtitle12:"Cookie Policy",
                footer_subtitle13:"Success Stories",
                footer_subtitle14:"E-Commerce Guides",
                footer_subtitle15:"E-Commerce Trends",
                footer_subtitle16:"Hyper Updates",
                footer_subtitle17:"Dropshipping and Supply",
                footer_subtitle18:"Seo and Marketing",
                footer_subtitle19:"Payment and Security",
                footer_subtitle20:"Tax Office / Number",
                footer_subtitle21:"Title",
                footer_subtitle22:"Customer Representative",
                footer_subtitle23:"All rights reserved",
                footer_subtitle24:"One",
                footer_subtitle25:"subsidiary",
            }
        },
        tr: {
            translation: {
                heradim: "Her Adımda Yanınızdayız",
                cozum_merkezi: "Çözüm Merkezi",
                turk_lang:"Türkçe",
                turk_change:"Türkçe",
                en_lang:"İngilizce",
                nav_anasayfa:"Anasayfa",
                nav_envanter:"Envanterimiz",
                nav_iletisim:"İletişim",
                banner_title01:"E-Ticaretinizi Güçlendirin, Satışlarınızı Zirveye Taşıyın!",
                banner_description01:"Hyper Teknoloji’nin yenilikçi e-ticaret çözümleriyle işinizi büyütün! Kolay entegrasyon, gelişmiş araçlar ve güvenilir altyapı sayesinde satışlarınızı artırın, müşteri deneyiminizi mükemmelleştirin.",

                banner_title02:"Dijital Ürünlerinizi Kolaylıkla Hemen Hyper Teknolojiden Alın Ve Satışa Sunun!",
                banner_description02:"Hyper Teknoloji’nin yenilikçi e-ticaret yazılımları ile satışlarınızı artırın. Kolay entegrasyon, gelişmiş araçlar ve güvenilir altyapı ile hedeflerinize hızla ulaşın.",

                banner_title03:"Fiziksel Ürün Satışında Kolaylık ve Hız!",
                banner_description03:"Hyper Teknoloji ile fiziksel ürünlerinizi kolayca satışa sunun! Kargo entegrasyonları sayesinde siparişten teslimata tüm süreçleri zahmetsizce yönetin ve işinizi büyütün.",

                banner_title04:"Dijital Ürünlerinizi Kolaylıkla Hemen Hyper Teknolojiden Alın Ve Satışa Sunun!",
                banner_description04:"Dropshipping destekli altyapımızla stok tutmadan ürünlerinizi kolayca satın. Hyper Teknoloji ile güvenli, hızlı ve kazançlı bir satış süreci sizi bekliyor.",

                banner_button:"Hemen Başlayın",
                section_title01:"Firmamızın Ürünleri",
                section_title02:"Diğer Ürünlerimizi Görün",
                section_title03:"Hyper Teknoloji, dijital ürünler başta olmak üzere E-Ticaret sektörüne özel 2006 Yılından bu yana yazılım ve pazarlama çözümleri sunmaktadır.",
                section_title04:"Listelenen Ürünler",

                footer_title01:"Kurumsal",
                footer_title02:"Sözleşmeler",
                footer_title03:"İletişim",
                footer_subtitle01:"Hakkımızda",
                footer_subtitle02:"E-Ticaret Paketleri",
                footer_subtitle03:"Uygulama Mağazası",
                footer_subtitle04:"Temalar",
                footer_subtitle05:"Referanslar",
                footer_subtitle06:"Demo Talebi",
                footer_subtitle07:"Aydınlatma Metni",
                footer_subtitle08:"Gizlilik Politikası",
                footer_subtitle09:"Kullanıcı Sözleşmesi",
                footer_subtitle10:"Satış Sözleşmesi",
                footer_subtitle11:"İptal & İade Koşulları",
                footer_subtitle12:"Çerez Politikası",
                footer_subtitle13:"Başarı Hikayeleri",
                footer_subtitle14:"E- Ticaret Rehberleri",
                footer_subtitle15:"E- Ticaret Trendleri",
                footer_subtitle16:"Hyper Güncellemeler",
                footer_subtitle17:"Dropshipping ve Tedarik",
                footer_subtitle18:"Seo ve Pazarlama",
                footer_subtitle19:"Ödeme ve Güvenlik",
                footer_subtitle20:"Vergi Dairesi / Numarası",
                footer_subtitle21:"Unvan",
                footer_subtitle22:"Müşteri Temsilcisi",
                footer_subtitle23:"Tüm Hakları Saklıdır",
                footer_subtitle24:"Bir",
                footer_subtitle25:"İştirakidir",

            }
        }
    }
});

function updatePageLanguage() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        el.textContent = i18next.t(key);
    });
}

function changeLanguage(language) {
    i18next.changeLanguage(language, updatePageLanguage);
    localStorage.setItem("selectedLanguage", language);
    localStorage.setItem("selectedTheme", language);
    location.reload();
}

window.onload = updatePageLanguage;


function changeFlag(){
    const language =  localStorage.getItem("selectedLanguage")
    const langSVG = document.querySelector("#lang_svg");
    if(language  == "tr") {
        langSVG.src = "/assets/svg/tr.svg";
    } else {
        langSVG.src = "/assets/svg/en.svg";
    }
}

changeFlag();


