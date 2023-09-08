import React from "react";

export default function PrivacyPolicy() {
  return (
    <div
      style={{
        padding: 50,
        backgroundColor: "rgb(71,98,87)",
      }}
    >
      <h1>Privacy Policy</h1>
      <p className="privacy-header">
        This privacy policy sets out how we use and protect any information that
        you give us when you use this website. We are committed to ensuring that
        your privacy is protected. Should we ask you to provide certain
        information by which you can be identified when using this website, then
        you can be assured that it will only be used in accordance with this
        privacy statement. We may change this policy from time to time by
        updating this page. You should check this page from time to time to
        ensure that you are happy with any changes.
      </p>
      <h2>What we collect</h2>
      <ul>
        <p className="privacy-details">
          We may collect the following information:
        </p>
        <li> name</li>
        <li>contact information including email address and phone number</li>
        <li>address and postcode</li>
        <li>order history and preferences</li>
        <li>other information relevant to customer surveys and/or offers</li>
      </ul>
      <h2>What we do with the information we gather</h2>
      <ul>
        <p className="privacy-details">
          We require this information to understand your needs and provide you
          with a better service, and in particular for the following reasons:
        </p>
        <li>Processing your orders and delivering your products</li>
        <li>Sending you confirmation emails and invoices</li>
        <li>Providing you with customer support and after-sales service</li>
        <li>Improving our products and services</li>
        <li>
          Sending you promotional emails about new products, special offers or
          other information which we think you may find interesting using the
          email address which you have provided
        </li>
        <li>
          Contacting you for market research purposes. We may contact you by
          email, phone, fax or mail. We may use the information to customize the
          website according to your interests.
        </li>
      </ul>
    </div>
  );
}
