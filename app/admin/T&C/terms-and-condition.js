// pages/terms.js
import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions</title>
        <meta name="description" content="Terms and Conditions of our website." />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
        <p>Last Updated: February 2025</p>

        <section className="mt-4">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to our website. By accessing or using our services, you agree to comply
            with and be bound by these Terms & Conditions.
          </p>
        </section>

        <section className="mt-4">
          <h2 className="text-xl font-semibold">2. User Responsibilities</h2>
          <p>
            Users must follow the rules and regulations while using the website. Any misuse
            may lead to account suspension.
          </p>
        </section>

        <section className="mt-4">
          <h2 className="text-xl font-semibold">3. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued use of our
            site means acceptance of the updated terms.
          </p>
        </section>
      </main>
    </>
  );
}
