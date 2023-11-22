import React from 'react';
import { View, Text, Image, ScrollView, Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
const Article = () => {
  return (
    <ScrollView style={{ backgroundColor: '#181818' }}>
      <View style={{ padding: 16 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 15,
          }}
        >
          Have these European hot spots to yourself this Thanksgiving
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 15,
          }}
        >
          Escape chaostic American airport with a European holiday.
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
            marginVertical: 20,
          }}
        >
          <Image
            source={require('../Article/media/writer.jpg')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 10,
            }}
          />
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'gray' }}>
            Terry Ward | Nov 8, 2022
          </Text>
        </View>
        <View>
          <View>
            <Image
              source={require('../Article/media/one.jpg')}
              style={styles.fullImg}
            />
          </View>
          <Text style={styles.secondaryTxt}>
            View of Parliament from Fisherman's Bostion in Budapest
          </Text>
          <Text style={styles.paragraph}>
            Thanksgiving traditionally brings promises of delicious turkey,
            marshmallow-encrusted sweet potatoes, football games, and quality
            family time—but for many Americans, that also means braving the
            maddening domestic road traffic and airport security queues at U.S.
            airports for the chance to gather around the table. With that in
            mind, travelers might be interested to know that Thanksgiving is one
            of the best times of the year to find airfare deals to favorite
            European destinations—and minimal crowds once you get there
          </Text>
          <Text style={styles.paragraph}>
            Thanksgiving is the hidden best week for international travel,” says
            Scott Keyes, founder of Scott’s Cheap Flights.Over the Thanksgiving
            travel period, he explains, airlines start slashing fares to fill
            their planes flying to places like Paris and Barcelona, among other
            international destinations. “International flights get significantly
            pricier in mid - December for the Christmas / New Year’s period,” he
            says. “But in late November, airlines still have to entice travelers
            overseas.” As long as you can stomach missing turkey dinner with
            your family, you might be able to get to Europe for the same price
            you’d pay for a ticket to, say, the Midwest, Keyes says.The off -
            season still comes with plenty of fun to be had, too.Fancy yourself
            sipping a Guinness at a Dublin pub or getting a headstart on holiday
            shopping at a German or Hungarian Christmas market ? Read on for a
            few European destinations worth considering for travel over the
            Thanksgiving holiday period.
          </Text>
        </View>
        <View>
          <Text style={styles.header}>Lisbon Portugal</Text>
          <View>
            <Image
              source={require('../Article/media/two.jpg')}
              style={styles.fullImg}
            />
          </View>
          <Text style={styles.secondaryTxt}>
            Bico Funicinal in Lisbon, Portugal
          </Text>
          <Text style={styles.paragraph}>
            Portugal has “supplanted Spain as the European cheap flight champion
            this year,” according to Keyes, with Lisbon seeing the best flight
            deals. “In the past two months, there have been roundtrip fares to
            Lisbon under $400 (many nonstop) from Boston, NYC, Chicago, Miami,
            Oakland, San Francisco, Washington, D.C., and elsewhere, including
            Thanksgiving availability,” he says.
          </Text>
          <Text style={styles.paragraph}>
            By late November in Portugal’s capital, the summer and early fall
            crowds are long gone and the temperatures have dropped into the mid-
            60s during the day(perfect for sightseeing without sweating).You can
            enjoy having the city’s museums largely to yourself and relish not
            queueing for pastéis de nata at Pastéis de Belém before renting a
            car to drive about 1.5 hours north to Nazaré.This tranquil coastal
            hamlet is known for the monster wave that crests right of its
            shoreline this time of year, drawing the world’s top big - wave
            surfers to challenge it from October to March.
          </Text>
        </View>
        <View>
          <Text style={styles.header}>Dublin</Text>
          <Image
            source={require('../Article/media/three.jpg')}
            style={styles.fullImg}
          />
          <Text style={styles.secondaryTxt}>Temple Bar in Dublin</Text>
          <Text style={styles.paragraph}>
            The Irish capital is another European destination that’s been ripe
            with tempting airfares of late, according to Keyes, who cites a
            “spate of cheap flights on Aer Lingus and other carriers, with
            widespread Thanksgiving availability.” So if you’ve had a trip to
            Ireland on your radar, why not investigate it for the holiday week
            and deploy fewer vacation days in the process?
          </Text>
          <Text style={styles.paragraph}>
            The Irish capital is another Dublin is an ideal launching point for
            road trips all around the country.So after you’ve hit the Guinness
            Storehouse for a proper pint or go pub and cafe- hopping in trendy
            Portobello, rent a car—or better yet, hop the train aboard Irish
            Rail—to travel west through the country to the charming city of
            Galway.The Galway Christmas Market is already in full swing come mid
            - November.Come to ride the carousel, sip a lager at the German Bier
            Keller, and browse 50 wooden chalets selling artisan foods and
            crafts in a lively setting.For a picturesque base in the area,
            consider Salthill, a seaside resort district on Galway Bay’s
            northern shore.Book a room overlooking the water and rolling Clare
            Hills at Salthill Hotel, steps from the seaside promenade.
          </Text>
          <Text style={styles.paragraph}>
            Florida travel writer Terry Ward has been pushing send on stories
            from the road since 2001 and has published her travel articles
            online and in print in such outlets as CNN, National Geographic,
            Afar, Conde Nast Traveler, The Washington Post, and Scuba Diving
            Magazine. She's the co-creator of FloridaBeyond, a blog about
            travels beyond the expected in Florida, and loves showing her two
            young kids the world beyond their backyards.
          </Text>
        </View>
        <View>
          <Text style={styles.header}>Budapest, Hungary</Text>
          <Image
            source={require('../Article/media/four.jpg')}
            style={styles.fullImg}
          />
          <Text style={styles.secondaryTxt}>
            River cruise in Budapest, Hungary
          </Text>
          <Text style={styles.paragraph}>
            Because the weather isnot balmy anywhere in Europe in late November,
            Amina Dearmon of Perspectives Travel recommends “embracing the
            colder temps and visiting destinations that thrive in the fall
            months,” starting with a Thanksgiving week trip to Budapest. The
            Hungarian metropolis is the spa capital of the world, and the city’s
            many outdoor thermal baths—like Széchenyi, which boasts 21 pools—are
            open all year for your wellness pleasure.
          </Text>
          <Text style={styles.paragraph}>
            Once you’re rejuvenated, you’ll have plenty of energy to ring in the
            holiday season—and get started on some shopping. “Christmas markets
            in Budapest typically start in mid- November, making it the perfect
            opportunity to browse for holiday gifts while on vacation,” Dearmon
            says.And there are several in Budapest to visit, including the
            city’s oldest and largest Christmas market that takes over
            Vörösmarty Square starting in mid - November and running until the
            new year.You can also consider departing from Budapest on a river
            cruise with Viking’s new Christmas on the Danube itinerary that
            visits Vienna and other cities in Austria and Germany along the way.
          </Text>
        </View>
        <View>
          <Text style={styles.header}>Rome</Text>
          <Image
            source={require('../Article/media/five.jpg')}
            style={styles.fullImg}
          />
          <Text style={styles.secondaryTxt}>Piazza Navona in Rome</Text>
          <Text style={styles.paragraph}>
            Its a toss up whether you wll luck out with a relatively warm and
            sunny day in Rome in late-November or something rainier and
            chillier. But what you won’t be up against in the Eternal City
            during a Thanksgiving vacation are the maddening summertime masses
            that jostle around the Trevi Fountain and clog the Campo de' Fiori.
          </Text>
          <Text style={styles.paragraph}>
            Chris MacLean, of Milan- based wine importer Open Tuesday Wines,
            says Rome makes an excellent getaway for Thanksgiving, or any other
            food - related holiday. “Rome is arguably the world’s greatest food
            city,” he says. “And the list of Rome’s top tourist attractions is
            endless.” If you’re looking to channel some Thanksgiving spirit on
            this side of the Atlantic, MacLean says you can consider letting
            turkey guide you with a visit to Abruzzo(roughly two hours east of
            Rome) to try one of the local specialties, tacchino alla canzanese—a
            turkey dish cooked in a terracotta pot with white wine, garlic and
            rosemary. “Abruzzo is a beautiful mountainous region that's both
            off-the-beaten-path and fairly easy to reach from Rome,” MacLean
            says.
          </Text>
        </View>
        <View>
          <Text style={styles.header}>Nuremberg, Germany</Text>
          <Image
            source={require('../Article/media/six.jpg')}
            style={styles.fullImg}
          />
          <Text style={styles.secondaryTxt}>
            Weissgerbergasse street in Nuremberg, Germany
          </Text>
          <Text style={styles.paragraph}>
            Late-November is prime time to visit Europes king of Christmas
            markets in Nuremberg, a popular pre- and post-river cruise stop,
            says Tania Swasbrook, co-founder of luxury travel consultancy Vgari
            Lifestyle.You can fly into Munich to hit the Hofbräuhaus for a
            weisswurst(white sausage made from veal, pork, and parsley) and a
            stein before enjoying the festive feel of the city’s famous food and
            produce market, the Viktualienmarkt.Then take the train roughly one
            hour north to Bavaria’s second biggest city and follow your nose to
            the scent of gingerbread and glühwein at the massive Nuremberg
            Christkindlesmarkt, one of the world’s oldest and largest Christmas
            markets, where wooden booths fill every nook of the main market
            square for a holiday shopping experience that’s the opposite of a
            packed shopping mall back home. “Most gifts you find here are very
            unique as they are often handmade,” Swasbrook says. “Everyone
            embraces the holiday spirit, which makes it an incredibly happy
            place.
          </Text>
          <Text style={styles.paragraph}>
            Chris MacLean, of Milan- based wine importer Open Tuesday Wines,
            says Rome makes an excellent getaway for Thanksgiving, or any other
            food - related holiday. “Rome is arguably the world’s greatest food
            city,” he says. “And the list of Rome’s top tourist attractions is
            endless.” If you’re looking to channel some Thanksgiving spirit on
            this side of the Atlantic, MacLean says you can consider letting
            turkey guide you with a visit to Abruzzo(roughly two hours east of
            Rome) to try one of the local specialties, tacchino alla canzanese—a
            turkey dish cooked in a terracotta pot with white wine, garlic and
            rosemary. “Abruzzo is a beautiful mountainous region that's both
            off-the-beaten-path and fairly easy to reach from Rome,” MacLean
            says.
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Image
            source={require('../Article/media/writer.jpg')}
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
            }}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'white',
              marginTop: 15,
            }}
          >
            Terry Ward
          </Text>
          <Text
            style={{
              marginTop: 18,
              color: 'white',
              lineHeight: 23,
            }}
          >
            Florida travel writer Terry Ward has been pushing send on stories
            from the road since 2001 and has published her travel articles
            online and in print in such outlets as CNN, National Geographic,
            Afar, Conde Nast Traveler, The Washington Post, and Scuba Diving
            Magazine. She's the co-creator of FloridaBeyond, a blog about
            travels beyond the expected in Florida, and loves showing her two
            young kids the world beyond their backyards.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fullImg: {
    width: '100%',
    height: 500,
    paddingVertical: 10,
  },
  secondaryTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 7,
    marginBottom: 20,
  },
  paragraph: { color: 'white', fontSize: 23, marginBottom: 25 },
  header: {
    color: 'white',
    fontSize: 25,
    marginBottom: 20,
    fontWeight: '700',
    marginTop: 50,
    letterSpacing: 1.5,
  },
});
export default Article;
