import { Title, Text, Card, SimpleGrid, Container, rem, Image, Anchor } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import NextImage from 'next/image';
import classes from './index.module.css';
import nordea from '../public/nordea.svg';
import op from '../public/op.svg';
import danskeBank from '../public/danske_bank.svg';
import pop from '../public/pop.svg';
import sp from '../public/sp.svg';
import aktia from '../public/aktia.svg';
import sPankki from '../public/s-pankki.svg';
import lahitapiola from '../public/lahitapiola.png';
import yle from '../public/yle.svg';
import iltalehti from '../public/iltalehti.svg';
import iltaSanomat from '../public/ilta-sanomat.svg';
import ampparit from '../public/ampparit.png';
import mtv from '../public/mtv.png';
import iltapulu from '../public/iltapulu.png';
import hs from '../public/hs.svg';
import keskiUusimaa from '../public/keski-uusimaa.png';
import yleAreena from '../public/yle_areena.svg';
import mtvKatsomo from '../public/mtv_katsomo.svg';
import netflix from '../public/netflix.svg';
import ruutu from '../public/ruutu.png';
import viaplay from '../public/viaplay.png';
import suomifi from '../public/suomifi.png';
import poliisi from '../public/poliisi.png';
import te from '../public/te.png';
import kanta from '../public/kanta.png';
import ytj from '../public/ytj.png';
import vayla from '../public/vayla.png';
import traficom from '../public/traficom.svg';
import vero from '../public/vero.svg';
import kela from '../public/kela.svg';
import tori from '../public/tori.png';
import huutonet from '../public/huutonet.png';
import huutokaupatcom from '../public/huutokaupatcom.png';
import nettiauto from '../public/nettiauto.png';
import nettimoto from '../public/nettimoto.png';
import etuovi from '../public/etuovi.svg';
import oikotie from '../public/oikotie.png';
import ebay from '../public/ebay.svg';
import gmail from '../public/gmail.svg';
import outlook from '../public/outlook.svg';
import gdrive from '../public/gdrive.png';
import youtube from '../public/youtube.svg';
import instagram from '../public/instagram.svg';
import x from '../public/x.svg';
import facebook from '../public/facebook.svg';
import vr from '../public/vr.svg';
import matkahuolto from '../public/matkahuolto.svg';
import posti from '../public/posti.svg';
import hsl from '../public/hsl.png';

interface Link {
  id: number;
  title: string;
  icon: any;
  alt: string;
  width: string | number;
  height: string | number;
  link: string;
}

const linksData = [
  {
    id: 0,
    title: 'Nordea',
    icon: nordea,
    alt: 'Nordea logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.nordea.fi/',
  },
  {
    id: 1,
    title: 'OP',
    icon: op,
    alt: 'OP logo',
    width: 90,
    height: 90,
    link: 'https://www.op.fi/',
  },
  {
    id: 2,
    title: 'Danske Bank',
    icon: danskeBank,
    alt: 'Danske Bank logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.danskebank.fi/',
  },
  {
    id: 3,
    title: 'POP Pankki',
    icon: pop,
    alt: 'POP Pankki logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.poppankki.fi/',
  },
  {
    id: 4,
    title: 'Säästöpankki',
    icon: sp,
    alt: 'Säästöpankki logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.saastopankki.fi/',
  },
  {
    id: 5,
    title: 'Aktia',
    icon: aktia,
    alt: 'Aktia logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.aktia.fi/',
  },
  {
    id: 6,
    title: 'S-Pankki',
    icon: sPankki,
    alt: 'S-Pankki logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.s-pankki.fi/',
  },
  {
    id: 7,
    title: 'Lähitapiola',
    icon: lahitapiola,
    alt: 'Lähitapiola logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.lahitapiola.fi/',
  },
  {
    id: 8,
    title: 'Yle.fi',
    icon: yle,
    alt: 'Yle logo',
    width: 90,
    height: 90,
    link: 'https://www.yle.fi/',
  },
  {
    id: 9,
    title: 'Iltalehti',
    icon: iltalehti,
    alt: 'Iltalehti logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.iltalehti.fi/',
  },
  {
    id: 10,
    title: 'Ilta-Sanomat',
    icon: iltaSanomat,
    alt: 'Ilta-Sanomat logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.is.fi/',
  },
  {
    id: 11,
    title: 'Ampparit',
    icon: ampparit,
    alt: 'Ampparit logo',
    width: 90,
    height: 90,
    link: 'https://www.ampparit.com/',
  },
  {
    id: 12,
    title: 'MTV Uutiset',
    icon: mtv,
    alt: 'MTV Uutisetlogo',
    width: 90,
    height: 90,
    link: 'https://www.mtvuutiset.fi/',
  },
  {
    id: 13,
    title: 'Iltapulu',
    icon: iltapulu,
    alt: 'Iltapulu logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.iltapulu.fi/',
  },
  {
    id: 14,
    title: 'Helsingin Sanomat',
    icon: hs,
    alt: 'Helsingin Sanomat logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.hs.fi/',
  },
  {
    id: 15,
    title: 'Keski-Uusimaa',
    icon: keskiUusimaa,
    alt: 'Keski-Uusimaa logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.keski-uusimaa.fi/',
  },
  {
    id: 16,
    title: 'Yle Areena',
    icon: yleAreena,
    alt: 'Yle Areena logo',
    width: 'auto',
    height: 'auto',
    link: 'https://areena.yle.fi/',
  },
  {
    id: 17,
    title: 'MTV Katsomo',
    icon: mtvKatsomo,
    alt: 'MTV Katsomo logo',
    width: 90,
    height: 90,
    link: 'https://www.mtv.fi/',
  },
  {
    id: 18,
    title: 'Netflix',
    icon: netflix,
    alt: 'Netflix logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.netflix.com/fi/',
  },
  {
    id: 19,
    title: 'Ruutu',
    icon: ruutu,
    alt: 'Ruutu logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.ruutu.fi/',
  },
  {
    id: 20,
    title: 'Viaplay',
    icon: viaplay,
    alt: 'Viaplay logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.viaplay.fi/',
  },
  {
    id: 21,
    title: 'Suomi.fi',
    icon: suomifi,
    alt: 'Suomi.fi logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.suomi.fi/',
  },
  {
    id: 22,
    title: 'Poliisi',
    icon: poliisi,
    alt: 'Poliisi logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.poliisi.fi/',
  },
  {
    id: 23,
    title: 'TE-palvelut',
    icon: te,
    alt: 'TE logo',
    width: 'auto',
    height: 'auto',
    link: 'https://toimistot.te-palvelut.fi/',
  },
  {
    id: 24,
    title: 'Kanta',
    icon: kanta,
    alt: 'Kanta logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.kanta.fi/',
  },
  {
    id: 25,
    title: 'Yritys- ja yhteisötietojärjestelmä',
    icon: ytj,
    alt: 'YTJ logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.ytj.fi/',
  },
  {
    id: 26,
    title: 'Väylävirasto',
    icon: vayla,
    alt: 'Väylävirasto logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.vayla.fi/',
  },
  {
    id: 27,
    title: 'Traficom',
    icon: traficom,
    alt: 'Traficom logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.traficom.fi/',
  },
  {
    id: 28,
    title: 'Vero',
    icon: vero,
    alt: 'Vero logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.vero.fi/',
  },
  {
    id: 29,
    title: 'Kela',
    icon: kela,
    alt: 'Kela logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.kela.fi/',
  },
  {
    id: 30,
    title: 'Tori',
    icon: tori,
    alt: 'Tori logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.tori.fi/',
  },
  {
    id: 31,
    title: 'Huuto.net',
    icon: huutonet,
    alt: 'Huutonet logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.huuto.net/',
  },
  {
    id: 32,
    title: 'Huutokaupat.com',
    icon: huutokaupatcom,
    alt: 'Huutokaupat.com logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.huutokaupat.com/',
  },
  {
    id: 33,
    title: 'Nettiauto',
    icon: nettiauto,
    alt: 'Nettiauto logo',
    width: 90,
    height: 90,
    link: 'https://www.nettiauto.com/',
  },
  {
    id: 34,
    title: 'Nettimoto',
    icon: nettimoto,
    alt: 'Nettimoto logo',
    width: 90,
    height: 90,
    link: 'https://www.nettimoto.com/',
  },
  {
    id: 35,
    title: 'Etuovi.com',
    icon: etuovi,
    alt: 'Etuovi logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.etuovi.com/',
  },
  {
    id: 36,
    title: 'Oikotie',
    icon: oikotie,
    alt: 'Oikotie logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.oikotie.fi/',
  },
  {
    id: 37,
    title: 'Ebay',
    icon: ebay,
    alt: 'Ebay logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.ebay.fi/',
  },
  {
    id: 38,
    title: 'Gmail',
    icon: gmail,
    alt: 'Gmail logo',
    width: 90,
    height: 90,
    link: 'https://mail.google.com/',
  },
  {
    id: 39,
    title: 'Outlook',
    icon: outlook,
    alt: 'Outlook logo',
    width: 'auto',
    height: 'auto',
    link: 'https://outlook.office.com/',
  },
  {
    id: 40,
    title: 'Google Drive',
    icon: gdrive,
    alt: 'Google Drive logo',
    width: 90,
    height: 90,
    link: 'https://drive.google.com/',
  },
  {
    id: 41,
    title: 'YouTube',
    icon: youtube,
    alt: 'YouTube logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.youtube.com/',
  },
  {
    id: 42,
    title: 'Instagram',
    icon: instagram,
    alt: 'Instagram logo',
    width: 90,
    height: 90,
    link: 'https://www.instagram.com/',
  },
  {
    id: 43,
    title: 'X (Twitter)',
    icon: x,
    alt: 'X logo',
    width: 90,
    height: 90,
    link: 'https://x.com/',
  },
  {
    id: 44,
    title: 'Facebook',
    icon: facebook,
    alt: 'Facebook logo',
    width: 90,
    height: 90,
    link: 'https://www.facebook.com/',
  },
  {
    id: 45,
    title: 'VR',
    icon: vr,
    alt: 'VR logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.vr.fi/',
  },
  {
    id: 46,
    title: 'Matkahuolto',
    icon: matkahuolto,
    alt: 'Matkahuolto logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.matkahuolto.fi/',
  },
  {
    id: 47,
    title: 'Posti',
    icon: posti,
    alt: 'Posti logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.posti.fi/',
  },
  {
    id: 48,
    title: 'HSL',
    icon: hsl,
    alt: 'HSL logo',
    width: 'auto',
    height: 'auto',
    link: 'https://www.hsl.fi/',
  },
];

export default function Index() {
  const [dayText, setDayText] = useState<string>('');
  const [sortedLinks, setSortedLinks] = useState<Link[]>([]);

  useEffect(() => {
    const currentDate = new Date();
    const weekNumber = getWeekNumber(currentDate);
    const formattedText = `${currentDate.toLocaleDateString('fi-FI', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).replace('na ', ' ')}, viikko ${weekNumber}`;
    setDayText(formattedText);
  }, []);

  const getWeekNumber = (date: Date): number => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));

    const yearStart = Number(new Date(d.getFullYear(), 0, 1).getTime());
    const timeDiff = Number(d.getTime() - yearStart);

    return Math.ceil((timeDiff / 86400000 + 1) / 7);
  };

  useEffect(() => {
    const sorted = linksData.sort((a, b) => {
      const countA = localStorage.getItem(`clickCount_${a.id}`) || 0;
      const countB = localStorage.getItem(`clickCount_${b.id}`) || 0;
      return +countB - +countA;
    });

    setSortedLinks(sorted);
  }, []);

  const handleClick = (id: number) => {
    const storedCount = localStorage.getItem(`clickCount_${id}`);
    const count = (storedCount ? +storedCount : 0) + 1;
    localStorage.setItem(`clickCount_${id}`, count.toString());
  };

  const links = sortedLinks.map((feature) => (
    <Anchor underline="never" key={feature.link} href={feature.link} onClick={() => handleClick(feature.id)}>
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <Image src={feature.icon} alt={feature.alt || ''} w={feature.width} h={feature.height} component={NextImage} />
        <Text fz={rem(28)} fw={600} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
      </Card>
    </Anchor>
  ));

  return (
    <>
      <Container size="lg" py="xl">
        <Title order={2} className={classes.title} ta="center" mt="sm" fz={rem(70)} fw={900}>
          aloit.us
        </Title>
        <Text ta="center" className={classes.description} fz={rem(28)}>
          {dayText}
        </Text>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {links}
        </SimpleGrid>
      </Container>{' '}
      <Footer></Footer>
    </>
  );
}
