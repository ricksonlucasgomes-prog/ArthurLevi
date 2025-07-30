import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { toast } from 'sonner';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: '',
      email: '',
      organization: '',
      subject: '',
      message: ''
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const socialLinks = [{
    icon: Instagram,
    label: "Instagram",
    href: "#",
    color: "hover:text-pink-500"
  }, {
    icon: Facebook,
    label: "Facebook",
    href: "#",
    color: "hover:text-blue-500"
  }, {
    icon: Twitter,
    label: "Twitter",
    href: "#",
    color: "hover:text-blue-400"
  }];
  return <section id="contact" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Se você é um olheiro, treinador, patrocinador ou apenas quer se conectar,
            adoraríamos ouvir de você.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="fade-in-up">
            
          </div>

          {/* Contact Info & Social */}
          <div className="fade-in-up">
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-background rounded-2xl p-8 shadow-card px-[20px]">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Informações de Contato
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full primary-gradient flex items-center justify-center shadow-elegant">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-muted-foreground">contact@arthurlevi.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full primary-gradient flex items-center justify-center shadow-elegant">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Telefone</div>
                      <div className="text-muted-foreground">+55 62 9 9434-9416

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-background rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Acompanhe a Jornada
                </h3>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => <a key={index} href={social.href} className={`flex items-center space-x-4 p-3 rounded-lg hover:bg-muted transition-smooth group ${social.color}`}>
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:shadow-elegant transition-smooth">
                        <social.icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{social.label}</span>
                    </a>)}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-background rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Tempo de Resposta
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Consultas Gerais</span>
                    <span className="font-semibold text-foreground">24-48 horas</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Solicitações de Mídia</span>
                    <span className="font-semibold text-foreground">Mesmo dia</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Assuntos Urgentes</span>
                    <span className="font-semibold text-foreground">2-4 horas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;