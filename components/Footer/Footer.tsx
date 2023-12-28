import { Container, Group, Anchor, Text, Box } from '@mantine/core';
import classes from './Footer.module.css';

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text
          style={{ textDecoration: 'none', transition: 'text-decoration 0.3s' }}
          onMouseEnter={(event) => {
            event.currentTarget.style.textDecoration = 'underline';
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.textDecoration = 'none';
          }}
          component="a"
          href="mailto:me@trimpsuz.dev"
          c="var(--mantine-color-blue-filled)"
        >
          Pyydä linkkiä
        </Text>
        <Box>
          <Text>
            © {new Date().getFullYear()}{' '}
            <Text
              style={{ textDecoration: 'none', transition: 'text-decoration 0.3s' }}
              onMouseEnter={(event) => {
                event.currentTarget.style.textDecoration = 'underline';
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.textDecoration = 'none';
              }}
              component="a"
              href="https://trimpsuz.dev"
              c="var(--mantine-color-blue-filled)"
            >
              Trimpsuz
            </Text>
          </Text>
          <Text
            style={{ textDecoration: 'none', transition: 'text-decoration 0.3s' }}
            onMouseEnter={(event) => {
              event.currentTarget.style.textDecoration = 'underline';
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.textDecoration = 'none';
            }}
            component="a"
            href="https://github.com/Trimpsuz/aloit.us"
            c="var(--mantine-color-blue-filled)"
          >
            Lähdekoodi
          </Text>
        </Box>
      </Container>
    </div>
  );
}
