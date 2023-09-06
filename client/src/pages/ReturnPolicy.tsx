import React from "react";

export default function ReturnPolicy() {
  return (
    <div
      style={{
        padding: 50,
        backgroundColor: "rgb(71,98,87)",
      }}
    >
      <h1>Return Policy</h1>
      <ul>
        <p className="return-details">
          We want you to be happy with your purchase from our website. If you
          are not satisfied with your product, you can return it to us within 30
          days of delivery for a full refund or exchange, subject to the
          following conditions:
        </p>
        <li>
          The product must be in its original condition, unused, unwashed, and
          with all tags and labels attached.
        </li>
        <li>
          The product must be returned in its original packaging, along with the
          receipt or proof of purchase.
        </li>
        <li>
          The product must not be damaged, defective, or faulty due to misuse,
          abuse, or negligence.
        </li>
        <li>
          The product must not be customized, personalized, or made-to-order.
        </li>
        <li>The product must not be a clearance, sale, or discounted item.</li>
      </ul>
      <p className="return-header">
        To initiate a return, please contact us at [email address] or [phone
        number] and provide your order number, name, email address, and reason
        for return. We will send you a return authorization number and
        instructions on how to ship the product back to us. You are responsible
        for the cost and risk of returning the product to us. We recommend that
        you use a trackable and insured shipping service.
      </p>
      <p className="return-header">
        Once we receive and inspect your return, we will notify you by email
        whether your return is accepted or rejected. If your return is accepted,
        we will process your refund or exchange within 14 days of receiving the
        product. Your refund will be issued to the original payment method. If
        your return is rejected, we will send the product back to you at your
        expense.
      </p>
      <p className="return-header">
        We reserve the right to refuse any return that does not comply with our
        return policy. We also reserve the right to charge a restocking fee of
        up to 20% of the product price for any return that is damaged,
        incomplete, or not in its original condition.
      </p>
      <p className="return-header">
        If you have any questions or concerns about our return policy, please
        contact us at [email address] or [phone number]. We are always happy to
        assist you.
      </p>
    </div>
  );
}
