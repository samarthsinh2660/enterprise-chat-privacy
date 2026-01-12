export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Enterprise Chat Application</h1>
          <p className="text-xl opacity-90">Privacy Policy & Terms of Service</p>
          <p className="mt-4 text-sm opacity-75">Last Updated: January 12, 2026</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <ul className="flex flex-wrap gap-4 justify-center text-sm">
            <li><a href="#overview" className="text-primary hover:underline">Overview</a></li>
            <li><a href="#data-collection" className="text-primary hover:underline">Data Collection</a></li>
            <li><a href="#data-usage" className="text-primary hover:underline">Data Usage</a></li>
            <li><a href="#data-security" className="text-primary hover:underline">Security</a></li>
            <li><a href="#user-rights" className="text-primary hover:underline">Your Rights</a></li>
            <li><a href="#contact" className="text-primary hover:underline">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Overview Section */}
        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">1. Overview</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            <p>
              This Privacy Policy describes how <strong>NewTech InfoSoft Pvt. Ltd.</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, 
              and protects information when you use the <strong>Enterprise Chat Application</strong> (&quot;the App&quot;).
            </p>
            <p>
              The Enterprise Chat Application is a <strong>private enterprise communication tool</strong> intended 
              exclusively for authorized employees and personnel of organizations that have licensed our software. 
              This application is not available to the general public and is deployed within controlled enterprise environments.
            </p>
            <p>
              By using this application, you acknowledge that you have read, understood, and agree to be bound by 
              this Privacy Policy. If you do not agree with any part of this policy, you should not use the application.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
              <p className="text-blue-800">
                <strong>Important:</strong> This application is designed for enterprise use only. Access is restricted 
                to authorized users within your organization. All communications may be subject to monitoring as per 
                your organization&apos;s policies.
              </p>
            </div>
          </div>
        </section>

        {/* Data Collection Section */}
        <section id="data-collection" className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            
            <div>
              <h3 className="text-lg font-semibold mb-3">2.1 Account Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Full name and display name</li>
                <li>Email address (corporate email)</li>
                <li>Phone number (for verification and notifications)</li>
                <li>Profile picture (optional)</li>
                <li>Employee ID or user identifier</li>
                <li>Department and role information</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">2.2 Communication Data</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Text messages and chat content</li>
                <li>Media files (images, videos, documents)</li>
                <li>Audio messages and voice recordings</li>
                <li>Message timestamps and delivery status</li>
                <li>Read receipts and typing indicators</li>
                <li>Group chat memberships and participation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">2.3 Device & Technical Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Device type, model, and operating system</li>
                <li>Unique device identifiers (for push notifications)</li>
                <li>IP address and network information</li>
                <li>App version and configuration</li>
                <li>Login timestamps and session information</li>
                <li>Crash reports and diagnostic data</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">2.4 Call Data</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Voice and video call metadata (duration, participants)</li>
                <li>Call quality metrics for service improvement</li>
                <li>Call connection and disconnection timestamps</li>
              </ul>
              <p className="text-sm text-gray-500 mt-2">
                Note: Audio and video content of calls is not recorded unless explicitly enabled by your organization.
              </p>
            </div>

          </div>
        </section>

        {/* Data Usage Section */}
        <section id="data-usage" className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            
            <div>
              <h3 className="text-lg font-semibold mb-3">3.1 Core Application Functionality</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Enabling real-time messaging and communication</li>
                <li>Delivering push notifications for new messages</li>
                <li>Facilitating voice and video calls</li>
                <li>Syncing messages across your devices</li>
                <li>Displaying online/offline status and presence</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">3.2 Authentication & Security</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Verifying user identity during login</li>
                <li>Protecting against unauthorized access</li>
                <li>Detecting and preventing fraudulent activity</li>
                <li>Maintaining session security</li>
                <li>Implementing two-factor authentication</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">3.3 Compliance & Administration</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Meeting legal and regulatory requirements</li>
                <li>Supporting organizational compliance policies</li>
                <li>Enabling authorized administrative oversight</li>
                <li>Maintaining audit trails for security purposes</li>
                <li>Responding to legal requests when required</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">3.4 Service Improvement</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Analyzing usage patterns to improve features</li>
                <li>Identifying and fixing bugs and issues</li>
                <li>Optimizing application performance</li>
                <li>Developing new features based on usage data</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Data Access Section */}
        <section id="data-access" className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">4. Data Access & Sharing</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            
            <div>
              <h3 className="text-lg font-semibold mb-3">4.1 Organizational Access</h3>
              <p className="text-gray-700 mb-3">
                As an enterprise communication tool, authorized administrators within your organization may have 
                access to communication data for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Compliance monitoring and auditing</li>
                <li>Security incident investigation</li>
                <li>Internal policy enforcement</li>
                <li>Legal and regulatory compliance</li>
                <li>HR-related investigations when required</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                <p className="text-yellow-800">
                  <strong>Notice:</strong> Users are informed of administrative access capabilities within the 
                  application. Your organization&apos;s IT policies govern the extent and circumstances of such access.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">4.2 Third-Party Service Providers</h3>
              <p className="text-gray-700 mb-3">
                We may share data with trusted third-party service providers who assist in operating our services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Cloud Infrastructure:</strong> Microsoft Azure for secure data storage and processing</li>
                <li><strong>Push Notifications:</strong> Apple Push Notification Service (APNs) and Firebase Cloud Messaging (FCM)</li>
                <li><strong>Voice/Video:</strong> Agora for real-time communication services</li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">
                All third-party providers are contractually bound to protect your data and use it only for the 
                specified purposes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">4.3 Legal Requirements</h3>
              <p className="text-gray-700">
                We may disclose information when required by law, court order, or government request, or when 
                necessary to protect the rights, property, or safety of our users, our company, or others.
              </p>
            </div>

          </div>
        </section>

        {/* No Tracking Section */}
        <section id="no-tracking" className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">5. No Tracking or Advertising</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-full p-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Your Privacy is Protected</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>No Cross-App Tracking:</strong> We do not track users across other apps or websites.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>No Advertising:</strong> Your data is never used for advertising purposes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>No Data Sales:</strong> We never sell your personal information to third parties.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>No Profiling:</strong> We do not create advertising profiles based on your communications.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data Security Section */}
        <section id="data-security" className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">6. Data Security</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            
            <p className="text-gray-700">
              We implement industry-standard security measures to protect your data:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">🔐 Encryption</h4>
                <p className="text-sm text-gray-600">All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">🛡️ Secure Infrastructure</h4>
                <p className="text-sm text-gray-600">Hosted on enterprise-grade cloud infrastructure with SOC 2 compliance.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">🔑 Access Controls</h4>
                <p className="text-sm text-gray-600">Role-based access controls and multi-factor authentication protect your account.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">📊 Monitoring</h4>
                <p className="text-sm text-gray-600">24/7 security monitoring and regular security audits ensure ongoing protection.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Data Retention Section */}
        <section id="data-retention" className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">7. Data Retention</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            <p className="text-gray-700">
              We retain your data for as long as necessary to provide our services and comply with legal obligations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Messages & Media:</strong> Retained according to your organization&apos;s retention policy</li>
              <li><strong>Account Information:</strong> Retained while your account is active</li>
              <li><strong>Backup Data:</strong> Retained for 7 days for disaster recovery purposes</li>
              <li><strong>Audit Logs:</strong> Retained for compliance purposes as required by law</li>
            </ul>
            <p className="text-gray-700">
              Upon account deletion or organization offboarding, your data will be securely deleted within 30 days, 
              except where retention is required by law.
            </p>
          </div>
        </section>

        {/* User Rights Section */}
        <section id="user-rights" className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">8. Your Rights</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            <p className="text-gray-700">
              Depending on your jurisdiction, you may have the following rights regarding your personal data:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Right to Access</h4>
                <p className="text-sm text-gray-600">Request a copy of your personal data we hold.</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Right to Rectification</h4>
                <p className="text-sm text-gray-600">Request correction of inaccurate personal data.</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Right to Erasure</h4>
                <p className="text-sm text-gray-600">Request deletion of your personal data (subject to legal requirements).</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Right to Portability</h4>
                <p className="text-sm text-gray-600">Request your data in a portable format.</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              To exercise these rights, please contact your organization&apos;s IT administrator or reach out to us directly.
            </p>
          </div>
        </section>

        {/* Children's Privacy */}
        <section id="children" className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">9. Children&apos;s Privacy</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-700">
              This application is intended for use by authorized employees within enterprise environments. 
              We do not knowingly collect personal information from children under 16 years of age. If you 
              believe we have inadvertently collected such information, please contact us immediately.
            </p>
          </div>
        </section>

        {/* Policy Updates */}
        <section id="updates" className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">10. Changes to This Policy</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify users of any material changes 
              through the application or via email. Your continued use of the application after such modifications 
              constitutes your acknowledgment and acceptance of the updated policy.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">11. Contact Us</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-700 mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary mb-4">New Info Tech</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-start gap-3">
                    <span className="text-primary">📍</span>
                    <span>
                      B-604, Ganesh Glory 11,<br />
                      Jagatpur Road, Gota,<br />
                      Ahmedabad, Gujarat 382481, India
                    </span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-primary">📧</span>
                    <a href="mailto:info@newtechinfosoft.com" className="text-primary hover:underline">
                      info@newtechinfosoft.com
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-primary">📞</span>
                    <a href="tel:+919924aborting" className="text-primary hover:underline">
                      +91 99244 35445
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-primary">🌐</span>
                    <a href="https://newtechinfosoft.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      newtechinfosoft.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-lg p-6">
                <h3 className="text-lg font-bold text-secondary mb-4">Privacy Inquiries</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center gap-3">
                    <span className="text-secondary">📧</span>
                    <a href="mailto:privacy@newtechinfosoft.com" className="text-secondary hover:underline">
                      privacy@newtechinfosoft.com
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-secondary">👤</span>
                    <span>Data Protection Officer: Niraj Shah</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-4">
                    For privacy-related inquiries, we aim to respond within 48 business hours.
                  </p>
                </div>
                <div className="mt-4">
                  <a 
                    href="https://newtechinfosoft.com/contact-us/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors"
                  >
                    Contact Form →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg font-semibold mb-2">Enterprise Chat Application</p>
          <p className="text-gray-400 text-sm mb-4">
            Developed by <a href="https://newtechinfosoft.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">NewTech InfoSoft Pvt. Ltd.</a>
          </p>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} NewTech InfoSoft Pvt. Ltd. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="https://newtechinfosoft.com/contact-us/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
