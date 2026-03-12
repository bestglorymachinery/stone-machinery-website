import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact({ language }: { language: string }) {
  const t = {
    zh: {
      title: '联系我们',
      subtitle: '需要设备报价、技术咨询或售后服务？我们的专业团队随时为您服务。',
      contactInfo: '联系方式',
      addressTitle: '工厂地址',
      address: '福建省晋江市五里工业园区',
      phoneTitle: '销售热线',
      emailTitle: '电子邮件',
      hoursTitle: '工作时间',
      hours: '周一至周六: 08:00 - 18:00\n周日: 休息',
      formTitle: '在线留言',
      nameLabel: '您的姓名 *',
      namePlaceholder: '请输入姓名',
      phoneLabel: '联系电话 *',
      phonePlaceholder: '请输入电话号码',
      emailLabel: '电子邮件',
      emailPlaceholder: '请输入邮箱地址',
      subjectLabel: '感兴趣的产品/服务',
      subjectOptions: ['请选择...', '切割设备', '抛光设备', '异型加工设备', '售后维修服务', '其他咨询'],
      messageLabel: '留言内容 *',
      messagePlaceholder: '请详细描述您的需求...',
      btnSubmit: '发送消息',
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Need a quote, technical support, or after-sales service? Our team is ready to help.',
      contactInfo: 'Contact Information',
      addressTitle: 'Factory Address',
      address: 'Wuli Industrial Park,  Jinjiang City, Quanzhou, Fujian, China',
      phoneTitle: 'Sales Hotline',
      emailTitle: 'Email',
      hoursTitle: 'Working Hours',
      hours: 'Mon-Sat: 08:00 - 18:00\nSun: Closed',
      formTitle: 'Send a Message',
      nameLabel: 'Your Name *',
      namePlaceholder: 'Enter your name',
      phoneLabel: 'Phone Number *',
      phonePlaceholder: 'Enter your phone number',
      emailLabel: 'Email Address',
      emailPlaceholder: 'Enter your email',
      subjectLabel: 'Products/Services of Interest',
      subjectOptions: ['Please select...', 'Cutting Equipment', 'Polishing Equipment', 'Profiling Equipment', 'After-sales Service', 'Other Inquiries'],
      messageLabel: 'Message *',
      messagePlaceholder: 'Describe your needs in detail...',
      btnSubmit: 'Send Message',
    },
  };

  const text = language === 'zh' ? t.zh : t.en;

  return (
    <div className="py-16 lg:py-24 bg-[#F5F7FA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0B3C5D] mb-4">{text.title}</h1>
          <div className="w-16 h-1 bg-[#00AEEF] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[#0B3C5D]/75 max-w-2xl mx-auto">{text.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Contact info cards - icon-based */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl border border-[#0B3C5D]/10 shadow-md p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[#0B3C5D] mb-6">{text.contactInfo}</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0B3C5D] flex items-center justify-center text-[#00AEEF]">
                    <MapPin className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0B3C5D]">{text.addressTitle}</h4>
                    <p className="text-sm text-[#0B3C5D]/70 mt-1">{text.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0B3C5D] flex items-center justify-center text-[#00AEEF]">
                    <Phone className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0B3C5D]">{text.phoneTitle}</h4>
                    <p className="text-sm text-[#0B3C5D]/70 mt-1">+86 137 7482 8040<br />+86 139 2283 4755</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0B3C5D] flex items-center justify-center text-[#00AEEF]">
                    <Mail className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0B3C5D]">{text.emailTitle}</h4>
                    <p className="text-sm text-[#0B3C5D]/70 mt-1">micromotor.cn@gmail.com<br />support@bestglorymachinery.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0B3C5D] flex items-center justify-center text-[#00AEEF]">
                    <Clock className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0B3C5D]">{text.hoursTitle}</h4>
                    <p className="text-sm text-[#0B3C5D]/70 mt-1 whitespace-pre-line">{text.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-[#0B3C5D]/10 shadow-md p-6 md:p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-[#0B3C5D] mb-6">{text.formTitle}</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#0B3C5D] mb-2">{text.nameLabel}</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-[#0B3C5D]/20 bg-[#F5F7FA] focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF] outline-none transition"
                      placeholder={text.namePlaceholder}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#0B3C5D] mb-2">{text.phoneLabel}</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-[#0B3C5D]/20 bg-[#F5F7FA] focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF] outline-none transition"
                      placeholder={text.phonePlaceholder}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#0B3C5D] mb-2">{text.emailLabel}</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-[#0B3C5D]/20 bg-[#F5F7FA] focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF] outline-none transition"
                    placeholder={text.emailPlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[#0B3C5D] mb-2">{text.subjectLabel}</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-[#0B3C5D]/20 bg-[#F5F7FA] focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF] outline-none transition"
                  >
                    {text.subjectOptions.map((opt, i) => (
                      <option key={i}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#0B3C5D] mb-2">{text.messageLabel}</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-[#0B3C5D]/20 bg-[#F5F7FA] focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF] outline-none transition resize-none"
                    placeholder={text.messagePlaceholder}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-lg font-semibold bg-[#00AEEF] text-white shadow-md hover:bg-[#1D70B8] hover:shadow-lg transition-all duration-200 btn-cta-hover"
                >
                  <Send className="h-5 w-5" />
                  {text.btnSubmit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
