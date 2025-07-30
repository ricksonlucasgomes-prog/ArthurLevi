import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, TrendingUp, Users, Award, Target, Heart } from 'lucide-react';
const SponsorshipSection = () => {
  const sponsorshipBenefits = [{
    icon: Star,
    title: "Associação de Marca",
    description: "Associe sua marca à excelência e ao talento em ascensão no futebol juvenil"
  }, {
    icon: TrendingUp,
    title: "Crescimento da Audiência",
    description: "Alcance um público engajado de fãs de futebol, famílias e entusiastas de esportes juvenis"
  }, {
    icon: Users,
    title: "Impacto na Comunidade",
    description: "Apoie o desenvolvimento juvenil e inspire a próxima geração de atletas"
  }, {
    icon: Award,
    title: "Reconhecimento",
    description: "Receba reconhecimento em todas as partidas, mídias e plataformas digitais de Arthur"
  }];
  const sponsorshipTiers = [ , ];
  return <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            
Junte-se à jornada
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seja parceiro de Arthur Levi e faça parte de uma história inspiradora de dedicação, talento e busca pela excelência no futebol.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sponsorshipBenefits.map((benefit, index) => <div key={index} className="text-center p-6 rounded-xl hover:shadow-card transition-smooth hover-scale fade-in-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto rounded-full primary-gradient flex items-center justify-center shadow-elegant">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>)}
        </div>

        {/* Sponsorship Tiers */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {sponsorshipTiers.map((tier, index) => {
            return <div key={index} className={`p-6 rounded-xl border ${tier.color}`}>
              <h3 className="text-lg font-bold mb-2 text-foreground">
                {tier.name}
              </h3>
              <p className="text-2xl font-semibold mb-4 text-foreground">
                {tier.price} <span className="text-sm text-muted-foreground">{tier.period}</span>
              </p>
              <ul className="space-y-2">
                {tier.features.map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    - {feature}
                  </li>
                ))}
              </ul>
            </div>
          })}
        </div>

        {/* Custom Sponsorship */}
        <div className="bg-muted rounded-2xl p-8 text-center fade-in-up">
          <div className="max-w-3xl mx-auto">
            <Target className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Oportunidades de Parceria Personalizadas
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Cada marca é única, assim como cada parceria. Vamos trabalhar juntos para criar
              um pacote de patrocínio personalizado que esteja alinhado com os valores da sua marca e objetivos de marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                <Heart className="w-5 h-5 mr-2" />
                Torne-se um Patrocinador
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Baixar Kit de Mídia
              </Button>
            </div>
          </div>
        </div>

        {/* Why Sponsor Arthur */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Por que Patrocinar Arthur Levi?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Histórico Comprovado</h4>
                  <p className="text-muted-foreground">Múltiplos campeonatos e prêmios individuais demonstram excelência consistente.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Potencial de Estrela em Ascensão</h4>
                  <p className="text-muted-foreground">Investimento inicial em um talento destinado ao futebol profissional.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Valores Autênticos</h4>
                  <p className="text-muted-foreground">Um jovem atleta que incorpora dedicação, trabalho em equipe e espírito esportivo.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in-up">
            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-bold mb-6 text-foreground">
                Pronto para começar?
              </h4>
              <p className="text-muted-foreground mb-6">
                Junte-se à lista crescente de marcas e organizações que apoiam a jornada de Arthur
                rumo ao futebol profissional.
              </p>
              <Button className="btn-hero text-lg px-8 py-4">
                Contate-Nos Hoje!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SponsorshipSection;