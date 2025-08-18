import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    document.title = 'Terms of Service - GPITG Limmited';
  }, []);

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-sky-500 via-slate-400 to-sky-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <FileText className="w-16 h-16 mx-auto mb-6 text-blue-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using GPITG Limmited's services, you accept and agree to be bound by the terms and conditions outlined in this agreement.
            </p>

            <h2>2. Services Description</h2>
            <p>
              GPITG Limmited provides IT services including but not limited to:
            </p>
            <ul>
              <li>Web Design & Development</li>
              <li>Mobile App Development</li>
              <li>System Development</li>
              <li>Web Hosting & Maintenance</li>
              <li>SEO & Digital Marketing</li>
              <li>IT Consulting</li>
            </ul>

            <h2>3. Client Responsibilities</h2>
            <p>
              As a client, you agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use our services in compliance with applicable laws</li>
              <li>Pay all fees as agreed upon in service contracts</li>
              <li>Provide necessary access and cooperation for service delivery</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All intellectual property rights in our services, including designs, code, and content, remain the property of GPITG Limmited unless explicitly transferred through written agreement.
            </p>

            <h2>5. Payment Terms</h2>
            <p>
              Payment terms are as follows:
            </p>
            <ul>
              <li>Payment schedules will be outlined in service agreements</li>
              <li>Late payments may incur additional fees</li>
              <li>All fees are non-refundable unless otherwise specified</li>
            </ul>

            <h2>6. Service Delivery</h2>
            <p>
              We strive to deliver services according to agreed-upon timelines. However, we are not liable for delays caused by factors beyond our reasonable control.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              GPITG Limmited shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>

            <h2>8. Termination</h2>
            <p>
              Either party may terminate services with written notice as specified in service agreements. Upon termination:
            </p>
            <ul>
              <li>All outstanding fees become immediately due</li>
              <li>Access to services may be discontinued</li>
              <li>Confidentiality obligations remain in effect</li>
            </ul>

            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of modified terms.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              For questions about these terms, please contact us at:
            </p>
            <ul>
              <li>Email: info@gpitg.co.tz</li>
              <li>Phone: +255 717 531 539 / +255 753 290 357 </li>
              <li>Address: Dar es Salaam, Tanzania</li>
            </ul>

            <p className="text-gray-600 mt-8">
              Last Updated: March 15, 2024
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;