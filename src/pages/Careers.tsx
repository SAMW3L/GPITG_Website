import React from 'react';
import { Mail, Briefcase, Users } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-500 via-slate-400 to-sky-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Become part of a progressive organization delivering innovative solutions.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Yes!, We Are Hiring</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              At GPITG, we are driven by continuous growth. For years, we have consistently
              delivered and exceeded our clients' expectations. As more clients seek our
              professional services, opportunities are emerging daily. We are looking to
              expand our team with innovative, energetic, and critical-thinking individuals
              who are eager to make a significant contribution.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 shadow-inner border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Your Contribution Matters</h3>
            <p className="text-gray-600 mb-6 text-center">
              If you have the drive to work with a progressive organization, we invite you to
              send us your application. We are actively seeking professionals in the
              following fields:
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 text-blue-600 font-medium">
                <Briefcase size={20} />
                <span>Business Professionals</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-600 font-medium">
                <Briefcase size={20} />
                <span>Sales Professionals</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-600 font-medium">
                <Briefcase size={20} />
                <span>ICT Professionals</span>
              </div>
            </div>

            <div className="text-center bg-white p-6 rounded-md shadow-sm border border-gray-200">
              <h4 className="text-xl font-bold text-gray-800 mb-4">How to Apply</h4>
              <p className="text-gray-600 mb-4">
                Please submit your CV along with a short, two-paragraph statement detailing
                how you aspire to contribute to the company's growth if hired.
              </p>
              <a
                href="mailto:hr.idesiretodeliver@gpitg.co.tz"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <Mail size={20} className="mr-2" />
                Send Your Application
              </a>
              <p className="mt-4 text-sm text-gray-500">
                All information should be sent to:
                <br className="sm:hidden" />
                <span className="font-semibold text-blue-600 block sm:inline-block"> hr.idesiretodeliver@gpitg.co.tz</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Work With Us Section (Optional but Recommended) */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Why Join GPITG?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team-Oriented Culture</h3>
              <p className="text-gray-600">
                Work alongside a team of innovative, energetic, and collaborative professionals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Meaningful Work</h3>
              <p className="text-gray-600">
                Contribute to projects that deliver tangible value and exceed client expectations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <Mail className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Continuous Growth</h3>
              <p className="text-gray-600">
                Be part of an organization that is constantly expanding and creating new opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;