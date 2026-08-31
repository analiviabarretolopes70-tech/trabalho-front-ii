import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'A Saga Crepúsculo',
  description: 'Explore a jornada de Bella, Edward e Jacob',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh', 
        backgroundColor: '#6e4747ff', 
        color: '#fff', 
        margin: 0, 
        fontFamily: 'Georgia, serif' 
      }}>
        <Header />
        <main >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
