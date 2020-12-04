const anaSayfa = function(req, res, next) {
  res.render('mekanlar-liste',
    { title : 'Anasayfa',
      'footer' : 'Ceyda Yılmaz 2020',
      'sayfaBaslik' : {
        'siteAd' : 'Mekan32',
        'aciklama' : 'Isparta civarındaki mekanları keşfedin!'
      },
      'mekanlar' : [
        {
          'ad' : 'Starbucks',
          'adres' : 'Centrum Garden',
          'puan' : '5',
          'imkanlar' : ['Kahve', 'Çay', 'Pasta'],
          'mesafe' : '1000km'
        },
        {
          'ad' : 'Gloria Jeans',
          'adres' : 'Iyaş Avm',
          'puan' : '3',
          'imkanlar' : ['Kahve', 'Kek', 'Çay'],
          'mesafe' : '5km'
        },
        {
          'ad' : 'Kahve Dünyası',
          'adres' : 'Iyaş Avm',
          'puan' : '2',
          'imkanlar' : ['Kahve', 'Kek', 'Pasta'],
          'mesafe' : '5km'
        },
        {
          'ad' : 'MackBear',
          'adres' : 'Fatih Mahallesi',
          'puan' : '5',
          'imkanlar' : ['Kahve Çeşitleri', 'Kek', 'Pasta'],
          'mesafe' : '6km'
        },
        {
          'ad' : 'Book Cafe',
          'adres' : 'Anadolu Mahallesi',
          'puan' : '1',
          'imkanlar' : ['Kahve', 'Kek', 'Çay', 'Tost', 'Çalışma Alanları'],
          'mesafe' : '100km'
        }
      ]
    }
   );
}

const mekanBilgisi = function(req, res, next) {
  res.render('mekan-detay', 
    { title : 'Mekan Bilgisi',
      'sayfaBaslik' : 'Starbucks',
      'footer' : 'Ceyda Yılmaz 2020',
      'mekanBilgisi' : {
        'ad' : 'Starbucks',
        'adres' : 'Centrum Garden',
        'puan' : 5,
        'imkanlar' : ['Kahve', 'Çay', 'Pasta'],
        'koordinatlar' : {
          'enlem': '37.781885',
          'boylam' : '30.566034'
        },
        'saatler' : [
          {
            'gunler' : 'Pazartesi - Cuma',
            'acilis' : '7:00',
            'kapanis' : '23:00',
            'kapali' : false
          },
          {
            'gunler' : 'Cumartesi',
            'acilis' : '9:00',
            'kapanis' : '22:00',
            'kapali' : false
          },
          {
            'gunler' : 'Pazar',
            'kapali' : true
          }
        ],
        'yorumlar' : [
          {
            'yorumYapan' : 'Elmina Mammadzada',
            'puan' : '5',
            'tarih' : '04.12.2020',
            'yorumMetni' : 'Mükemmel bir yer.'
          },
          {
            'yorumYapan' : 'Ceyda Yılmaz',
            'puan' : '1',
            'tarih' : '03.12.2020',
            'yorumMetni' : 'Bebat.'
          },
          {
            'yorumYapan' : 'Rozerin Günes',
            'puan' : '4',
            'tarih' : '01.11.2012',
            'yorumMetni' : 'Kahveleri güzel.'
          }
        ]
      }
    }
  );
}

const yorumEkle = function(req, res, next) {
  res.render('yorum-ekle', 
    { 
      title : 'Yorum Ekle',
      'footer' : 'Ceyda Yılmaz 2020'
    }
  );
}


module.exports = {
  anaSayfa,
  mekanBilgisi, 
  yorumEkle
}