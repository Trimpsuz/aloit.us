import { Title, Text, Card, SimpleGrid, Container, rem, Image, useMantineTheme } from '@mantine/core';
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

const linksData = [
  {
    title: 'Nordea',
    icon: nordea,
    alt: 'Nordea logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'OP',
    icon: op,
    alt: 'OP logo',
    width: 90,
    height: 90,
  },
  {
    title: 'Danske Bank',
    icon: danskeBank,
    alt: 'Danske Bank logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'POP Pankki',
    icon: pop,
    alt: 'POP Pankki logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Säästöpankki',
    icon: sp,
    alt: 'Säästöpankki logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Aktia',
    icon: aktia,
    alt: 'Aktia logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'S-Pankki',
    icon: sPankki,
    alt: 'S-Pankki logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Lähitapiola',
    icon: lahitapiola,
    alt: 'Lähitapiola logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Yle.fi',
    icon: yle,
    alt: 'Yle logo',
    width: 90,
    height: 90,
  },
  {
    title: 'Iltalehti',
    icon: iltalehti,
    alt: 'Iltalehti logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Ilta-Sanomat',
    icon: iltaSanomat,
    alt: 'Ilta-Sanomat logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Ampparit',
    icon: ampparit,
    alt: 'Ampparit logo',
    width: 90,
    height: 90,
  },
  {
    title: 'MTV Uutiset',
    icon: mtv,
    alt: 'MTV Uutisetlogo',
    width: 90,
    height: 90,
  },
  {
    title: 'Iltapulu',
    icon: iltapulu,
    alt: 'Iltapulu logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Helsingin Sanomat',
    icon: hs,
    alt: 'Helsingin Sanomat logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Keski-Uusimaa',
    icon: keskiUusimaa,
    alt: 'Keski-Uusimaa logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Yle Areena',
    icon: yleAreena,
    alt: 'Yle Areena logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'MTV Katsomo',
    icon: mtvKatsomo,
    alt: 'MTV Katsomo logo',
    width: 90,
    height: 90,
  },
  {
    title: 'Netflix',
    icon: netflix,
    alt: 'Netflix logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Ruutu',
    icon: ruutu,
    alt: 'Ruutu logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Viaplay',
    icon: viaplay,
    alt: 'Viaplay logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Suomi.fi',
    icon: suomifi,
    alt: 'Suomi.fi logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Poliisi',
    icon: poliisi,
    alt: 'Poliisi logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'TE-palvelut',
    icon: te,
    alt: 'TE logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Kanta',
    icon: kanta,
    alt: 'Kanta logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Yritys- ja yhteisötietojärjestelmä',
    icon: ytj,
    alt: 'YTJ logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Väylävirasto',
    icon: vayla,
    alt: 'Väylävirasto logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Traficom',
    icon: traficom,
    alt: 'Traficom logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Vero',
    icon: vero,
    alt: 'Vero logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Kela',
    icon: kela,
    alt: 'Kela logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Tori',
    icon: tori,
    alt: 'Tori logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Huuto.net',
    icon: huutonet,
    alt: 'Huutonet logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Huutokaupat.com',
    icon: huutokaupatcom,
    alt: 'Huutokaupat.com logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Nettiauto',
    icon: nettiauto,
    alt: 'Nettiauto logo',
    width: 90,
    height: 90,
  },
  {
    title: 'Nettimoto',
    icon: nettimoto,
    alt: 'Nettimoto logo',
    width: 90,
    height: 90,
  },
  {
    title: 'Etuovi.com',
    icon: etuovi,
    alt: 'Etuovi logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Oikotie',
    icon: oikotie,
    alt: 'Oikotie logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Ebay',
    icon: ebay,
    alt: 'Ebay logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Gmail',
    icon: gmail,
    alt: 'Gmail logo',
    width: 90,
    height: 90,
  },
  {
    title: 'Outlook',
    icon: outlook,
    alt: 'Outlook logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Google Drive',
    icon: gdrive,
    alt: 'Google Drive logo',
    width: 90,
    height: 90,
  },
  {
    title: 'YouTube',
    icon: youtube,
    alt: 'YouTube logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Instagram',
    icon: instagram,
    alt: 'Instagram logo',
    width: 90,
    height: 90,
  },
  {
    title: 'X (Twitter)',
    icon: x,
    alt: 'X logo',
    width: 90,
    height: 90,
  },
  {
    title: 'Facebook',
    icon: facebook,
    alt: 'Facebook logo',
    width: 90,
    height: 90,
  },
  {
    title: 'VR',
    icon: vr,
    alt: 'VR logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Matkahuolto',
    icon: matkahuolto,
    alt: 'Matkahuolto logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'Posti',
    icon: posti,
    alt: 'Posti logo',
    width: 'auto',
    height: 'auto',
  },
  {
    title: 'HSL',
    icon: hsl,
    alt: 'HSL logo',
    width: 'auto',
    height: 'auto',
  },
];

export default function Index() {
  const theme = useMantineTheme();
  const links = linksData.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <Image src={feature.icon} alt={feature.alt || ''} w={feature.width} h={feature.height} component={NextImage} />
      <Text fz={rem(28)} fw={700} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        aloit.us
      </Title>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {links}
      </SimpleGrid>
    </Container>
  );
}
