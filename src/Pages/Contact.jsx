import ContactFormSection from '../Component/Contact/form';
import ContactIntro from '../Component/Contact/Intro';
import ContactMapSection from '../Component/Contact/map';

function ContactPage() {
  return (
    <>
      <ContactIntro />
      <ContactFormSection/>
      <ContactMapSection/>
    </>
  );
}

export default ContactPage;