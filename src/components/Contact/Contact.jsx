import React, { useState } from 'react';
import { FaPhone, FaTelegram, FaInstagram, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Telegram Bot orqali xabar yuborish
      const telegramMessage = `
🔔 Yangi Xabar!

👤 Ism: ${formData.name}
📧 Email: ${formData.email}
📱 Telefon: ${formData.phone}

💬 Xabar:
${formData.message}
      `;

      const TELEGRAM_BOT_TOKEN = '7936775086:AAHjy2aDLKO6n4XYO-UR6R0aV8xwqSzKN2Q';
      const TELEGRAM_CHAT_ID = '6720729813';

      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: telegramMessage,
            parse_mode: 'HTML'
          })
        }
      );

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Xabaringiz muvaffaqiyatli yuborildi! Tez orada bog\'lanamiz.'
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Xatolik yuz berdi');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring yoki to\'g\'ridan-to\'g\'ri bog\'laning.'
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Telefon',
      value: '+998 33 985 02 09',
      link: 'tel:+998339850209'
    },
    {
      icon: <FaTelegram />,
      title: 'Telegram',
      value: '@asad_coder',
      link: 'https://t.me/asad_coder'
    },
    {
      icon: <FaInstagram />,
      title: 'Instagram',
      value: '@asadbek_asrorvich',
      link: 'https://www.instagram.com/asadbek_asrorvich?igsh=dXAwNHZxOG45MHhj'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'Asadbek-Axrorov',
      link: 'https://github.com/Asadbek-Axrorov'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Bog'lanish</h2>
        <p className="section-subtitle">
          Savol yoki loyiha bo'yicha xabar qoldiring
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Aloqa Ma'lumotlari</h3>
            <p className="contact-description">
              Quyidagi manzillar orqali bog'lanishingiz mumkin. 
              Men har doim sizning savollaringizga javob berishga tayyorman!
            </p>

            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-card"
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="location-info">
              <FaMapMarkerAlt className="location-icon" />
              <div>
                <h4>Manzil</h4>
                <p>Toshkent, O'zbekiston</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3>Xabar Yuborish</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Ismingiz *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ismingizni kiriting"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+998 XX XXX XX XX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Xabar *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Xabaringizni yozing..."
                ></textarea>
              </div>

              {status.message && (
                <div className={`status-message ${status.type}`}>
                  {status.message}
                </div>
              )}

              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Yuborilmoqda...' : 'Xabar Yuborish'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;