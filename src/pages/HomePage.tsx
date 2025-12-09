import Hero from '../sections/Hero'
import Features from '../sections/Features'
import SolutionsPreview from '../sections/SolutionsPreview'
import CoreCompetencies from '../sections/CoreCompetencies'
import FeaturedWork from '../sections/FeaturedWork'
import LearnPreview from '../sections/LearnPreview'
import FinalCTA from '../sections/FinalCTA'

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <Features />
      <SolutionsPreview />
      <CoreCompetencies />
      <FeaturedWork />
      <LearnPreview />
      <FinalCTA />
    </div>
  )
}

