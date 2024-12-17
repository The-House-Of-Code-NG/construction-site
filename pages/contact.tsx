import { PageWrapper } from '@/components/PageWrapper';
import AnimatedTitle from '@/components/AnimatedTitle';
import FormText from '@/components/form/Text';
import { useRef, useState } from 'react';
import Image from 'next/image';
import mapImg from "@/assets/media/map.png"

interface ContactForm {
  phone: string;
  fullName: string;
  email: string;
  message: string;
}
const ContactPage: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    phone: '',
    fullName: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<
    Record<keyof Omit<ContactForm, 'phone'>, boolean>
  >({
    fullName: false,
    email: false,
    message: false,
  });

  const me = useRef({
    phone: '+234 803 082 6961, +234 806 161 8261',
    email: 'Suite B25 Ummi Plaza, Tradefair Complex,  off Zaria Road, Kano.',
  });

  const handleUpdateForm = (field: keyof ContactForm, value: string): void => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = () => {
    // Reset form errors
    setFormErrors({
      fullName: false,
      email: false,
      message: false,
    });

    // Validate form fields
    const errors: Record<string, boolean> = {};
    if (!form.fullName) {
      errors.fullName = true;
    }
    if (!form.email) {
      errors.email = true;
    }
    if (!form.message) {
      errors.message = true;
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Submit the form if there are no errors
    }
  };
  return (
    <PageWrapper>
      <div className="pt-8 pb-10 overflow-hidden md:pb-20 lg:pt-[72px] lg:pb-[120px]">
        <div className="container">
          <AnimatedTitle
            title="Contact Us"
            className="mb-10 md:mb-20 lg:mb-[192px] text-alphaYellow"
            titleClassName="text-[57px] flex-shrink-0 leading-none font-Helvetica tracking-[1.59px] sm:text-[95px] md:text-[110px] lg:text-[150px] lg:tracking-[5.59px] xl:text-[132px]"
          />
          <form className="md:grid md:grid-cols-2 md:gap-x-[72px] mb-10">
            <FormText
              value={me.current.phone}
              label="Phone number"
              className="mb-5"
              isReadOnly={true}
              onChange={(value) => handleUpdateForm('phone', value)}
            />
            <FormText
              value={me.current.email}
              type="text"
              label="Address"
              isReadOnly={true}
              className="mb-8 md:mb-14 lg:mb-16"
            />
            <div
              id="start"
              className="text-lg text-alphaYellow leading-[1.2] tracking-[-0.41px] font-Helvetica mb-8 md:col-span-2 md:text-2xl md:mb-10 lg:text-[40px] lg:leading-[1.2]"
            >
              To reach out to us, <br />
              please fill in the form below.
            </div>
            <FormText
              error={formErrors.fullName}
              value={form.fullName}
              label="Fill your name"
              placeholder="Full name"
              className="mb-5 lg:mb-4"
              onChange={(value) => handleUpdateForm('fullName', value)}
            />
            <FormText
              error={formErrors.email}
              value={form.email}
              onChange={(value) => handleUpdateForm('email', value)}
              type="email"
              label="Fill your email"
              placeholder="Email address"
              className="mb-5 lg:mb-4"
            />
            <FormText
              error={formErrors.message}
              value={form.message}
              onChange={(value) => handleUpdateForm('message', value)}
              label="Write me a message"
              placeholder="Write me a message"
              className="mb-8 md:col-span-2"
            />
            <button
              type="button"
              className="flex items-center justify-center px-4 py-[9px] border rounded-[32px] text-white bg-alphaYellow max-w-max lg:px-7 lg:py-3"
              onClick={() => handleFormSubmit()}
            >
              <span>Submit</span>
            </button>
          </form>
          <Image src={mapImg} className="h-[70vh] w-full" />
        </div>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
