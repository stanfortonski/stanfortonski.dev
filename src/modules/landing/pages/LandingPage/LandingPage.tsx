import { Seo } from '@/modules/core/components/Seo';
import { type AppContextType } from '@/modules/core/contexts/AppContext';

import { LandingLayout } from '../../components/LandingLayout';
import { StartSection } from '../../components/StartSection';
import { ProjectsSection } from '../../components/ProjectsSection';
import { SkillsSection } from '../../components/SkillsSection';
import { AboutSection } from '../../components/AboutSection';
import { ContactSection } from '../../components/ContactSection';

export const LandingPage = ({ locale }: AppContextType) => {
    return (
        <LandingLayout locale={locale}>
            <Seo locale={locale} title="index.title" />

            <div className="container-fluid text-center">
                <StartSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
                <AboutSection />
            </div>
        </LandingLayout>
    );
};
