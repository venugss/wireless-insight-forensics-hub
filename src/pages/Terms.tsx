
import React from 'react';
import Layout from '@/components/Layout';

const Terms: React.FC = () => {
  return (
    <Layout>
      <div className="container max-w-4xl px-4 py-10 md:py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
        
        <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none">
          <p className="lead">
            These Terms of Service ("Terms") govern your access to and use of the WiNetForensic 
            Integrated Wireless Network Forensic Analysis Framework (the "Service"). Please read 
            these Terms carefully before using the Service.
          </p>
          
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree 
            with any part of the terms, you may not access the Service.
          </p>
          
          <h2>Description of Service</h2>
          <p>
            WiNetForensic provides a framework for analyzing wireless network traffic to detect 
            security incidents and anomalies. The Service allows users to upload network data for 
            analysis and receive reports and visualizations based on that data.
          </p>
          
          <h2>User Responsibilities</h2>
          <p>When using our Service, you agree to:</p>
          <ul>
            <li>Only upload data that you have legal rights to analyze</li>
            <li>Obtain appropriate consent from all relevant parties before analyzing network data</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not use the Service for any illegal or unauthorized purpose</li>
            <li>Not attempt to probe, scan, or test the vulnerability of the Service</li>
          </ul>
          
          <h2>Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the 
            exclusive property of WiNetForensic. The Service is protected by copyright, trademark, and 
            other laws. Our trademarks and trade dress may not be used in connection with any product 
            or service without our prior written consent.
          </p>
          
          <h2>Data Ownership</h2>
          <p>
            You retain all rights to the data you upload to the Service. By uploading data, you grant 
            us a license to use the data solely for the purpose of providing the Service to you.
          </p>
          
          <h2>Limitation of Liability</h2>
          <p>
            In no event shall WiNetForensic be liable for any indirect, incidental, special, 
            consequential, or punitive damages, including without limitation, loss of profits, data, 
            use, goodwill, or other intangible losses, resulting from your access to or use of or 
            inability to access or use the Service.
          </p>
          
          <h2>Disclaimer of Warranties</h2>
          <p>
            The Service is provided "as is" and "as available" without any warranties of any kind, 
            either express or implied. We do not guarantee that the Service will be uninterrupted, 
            secure, or error-free.
          </p>
          
          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of the jurisdiction in which the company is 
            registered, without regard to its conflict of law provisions.
          </p>
          
          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, 
            we will provide at least 30 days' notice prior to any new terms taking effect.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>
            <a href="mailto:legal@winetforensic.com">legal@winetforensic.com</a>
          </p>
          
          <p className="text-sm text-muted-foreground mt-10">
            Last updated: May 21, 2025
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
