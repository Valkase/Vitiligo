import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  Award,
  Clock,
  DollarSign,
  Brain,
  Microscope,
  FileText,
  Shield,
  Target,
  Lightbulb,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function VitiligoWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 animate-fadeIn">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center animate-pulse-glow">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ProjectNameX
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="#about"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
              >
                About
              </Link>
              <Link
                href="#challenges"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Challenges
              </Link>
              <Link
                href="#solution"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Solution
              </Link>
              <Link
                href="#achievements"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Progress
              </Link>
            </nav>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 transform hover:scale-105 transition-all duration-300">
              Get Support
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-32 px-6 animate-fadeIn">
        <div className="container mx-auto text-center max-w-5xl">
          <Badge className="mb-8 bg-gray-800 text-gray-200 border-gray-600 hover:bg-gray-700 text-sm px-4 py-2 animate-fadeInUp">
            Innovative Medical Research
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fadeInUp animation-delay-200">
            Revolutionary Treatment for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Vitiligo</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-300">
            Comprehensive patient support and groundbreaking treatment solutions for 65-95 million people worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-medium transform hover:scale-105 transition-all duration-300"
            >
              Explore Research
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-500 text-gray-200 hover:bg-gray-800 bg-transparent transform hover:scale-105 transition-all duration-300"
            >
              Patient Support
            </Button>
          </div>
        </div>
      </section>

      {/* About Vitiligo Section */}
      <section id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Understanding Vitiligo</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A chronic autoimmune disorder affecting millions worldwide
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Card className="bg-gray-900 border-gray-700 p-8 animate-slideInLeft hover:bg-gray-800 transition-all duration-500 transform hover:scale-105">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                  What is Vitiligo?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6 text-gray-200 leading-relaxed">
                <p>
                  Vitiligo is a chronic autoimmune disorder that results in the loss of skin pigmentation due to the
                  immune system attacking melanocytes—cells responsible for producing skin pigment.
                </p>
                <p>
                  Although the disease can affect all skin types, it is more noticeable in individuals with darker skin.
                  It can begin at any age, but most commonly appears before the age of thirty.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-8 animate-slideInRight">
              <div className="flex items-start gap-6 transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Global Impact</h3>
                  <p className="text-gray-200 leading-relaxed">
                    65-95 million people worldwide affected according to WHO 2022 statistics
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Contributing Factors</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Psychological factors, emotional trauma, genetics, and other autoimmune diseases
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="challenges" className="py-24 px-6 bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Current Challenges</h2>
            <p className="text-xl text-gray-300">Understanding the obstacles patients face today</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-900 border-gray-700 p-6 text-center group hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 animate-fadeInUp">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">Long Duration</h3>
              <p className="text-gray-200 text-sm leading-relaxed">Treatment can extend from 1 to 7 years</p>
            </Card>

            <Card className="bg-gray-900 border-gray-700 p-6 text-center group hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 animate-fadeInUp animation-delay-100">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">High Costs</h3>
              <p className="text-gray-200 text-sm leading-relaxed">Treatments cost up to $1,950, limiting access</p>
            </Card>

            <Card className="bg-gray-900 border-gray-700 p-6 text-center group hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 animate-fadeInUp animation-delay-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">Social Impact</h3>
              <p className="text-gray-200 text-sm leading-relaxed">Stigma leading to depression and anxiety</p>
            </Card>

            <Card className="bg-gray-900 border-gray-700 p-6 text-center group hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 animate-fadeInUp animation-delay-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">Low Awareness</h3>
              <p className="text-gray-200 text-sm leading-relaxed">Limited understanding due to no physical pain</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Solution</h2>
            <p className="text-xl text-gray-300">A comprehensive approach combining innovation and support</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Treatment Development */}
            <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-700/50 p-8 animate-slideInLeft hover:scale-105 transition-all duration-500">
              <CardHeader className="p-0 mb-8">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  Innovative Treatment
                </CardTitle>
                <CardDescription className="text-gray-200 text-base">
                  Revolutionary approach to vitiligo treatment
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                {[
                  "Reactivation of melanocytes to restore natural skin color",
                  "Significantly reduced treatment duration",
                  "Affordable and competitive alternative",
                  "Addresses common side effects",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-200">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Support Platform */}
            <Card className="bg-gradient-to-br from-green-900/50 to-blue-900/50 border-green-700/50 p-8 animate-slideInRight hover:scale-105 transition-all duration-500">
              <CardHeader className="p-0 mb-8">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  Patient Support
                </CardTitle>
                <CardDescription className="text-gray-200 text-base">
                  Comprehensive online support platform
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                {[
                  "Online platform offering psychological support",
                  "Progress tracking and vitiligo type identification",
                  "Educational resources for disease management",
                  "Enhanced mental well-being support",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-200">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-6 bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Research Progress</h2>
            <p className="text-xl text-gray-300">Milestones in our development journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-900 border-gray-700 p-8 text-center group hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 animate-fadeInUp">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Patent Filed</h3>
              <p className="text-gray-200 leading-relaxed">Successfully filed patent for our innovative treatment</p>
            </Card>

            <Card className="bg-gray-900 border-gray-700 p-8 text-center group hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 animate-fadeInUp animation-delay-100">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Ethical Approval</h3>
              <p className="text-gray-200 leading-relaxed">Obtained approval for animal testing protocols</p>
            </Card>

            <Card className="bg-gray-900 border-gray-700 p-8 text-center group hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 animate-fadeInUp animation-delay-200">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Research Publication</h3>
              <p className="text-gray-200 leading-relaxed">Preparing scientific paper for publication</p>
            </Card>
          </div>

          <div className="text-center animate-fadeInUp animation-delay-300">
            <Card className="inline-block bg-gray-900 border-gray-700 p-8 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center gap-3 justify-center text-white">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-orange-400" />
                  </div>
                  Implementation Partner
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-200">
                  Project implemented at the <span className="text-white font-semibold">National Research Centre</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-900 to-purple-900 animate-fadeIn">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fadeInUp">Our Mission</h2>
          <p className="text-xl leading-relaxed mb-12 text-gray-100 animate-fadeInUp animation-delay-200">
            We strive to provide effective and affordable treatment for vitiligo patients, improve their mental health,
            and help them regain self-confidence, ensuring a better quality of life and a more understanding society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-medium transform hover:scale-105 transition-all duration-300"
            >
              Join Our Community
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-transparent transform hover:scale-105 transition-all duration-300"
            >
              Support Research
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fadeInUp">Get Involved</h2>
          <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
            Whether you're a patient, researcher, or supporter, join our mission
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-700 p-8 group hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 animate-fadeInUp">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl text-white">For Patients</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-200 mb-6 leading-relaxed">Access support resources and track your journey</p>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                  Access Support
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 p-8 group hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 animate-fadeInUp animation-delay-100">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl text-white">For Researchers</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-200 mb-6 leading-relaxed">Collaborate with our research team</p>
                <Button
                  variant="outline"
                  className="w-full border-gray-500 text-gray-200 hover:bg-gray-700 bg-transparent transform hover:scale-105 transition-all duration-300"
                >
                  Research Collaboration
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 p-8 group hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 animate-fadeInUp animation-delay-200">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl text-white">For Supporters</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-200 mb-6 leading-relaxed">Help advance vitiligo research and support</p>
                <Button
                  variant="outline"
                  className="w-full border-gray-500 text-gray-200 hover:bg-gray-700 bg-transparent transform hover:scale-105 transition-all duration-300"
                >
                  Support Mission
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="animate-fadeInUp">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  ProjectNameX
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Advancing vitiligo treatment through innovative research and comprehensive patient care.
              </p>
            </div>

            <div className="animate-fadeInUp animation-delay-100">
              <h3 className="font-semibold mb-6 text-lg text-white">Research</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Our Innovation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Clinical Trials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Publications
                  </Link>
                </li>
              </ul>
            </div>

            <div className="animate-fadeInUp animation-delay-200">
              <h3 className="font-semibold mb-6 text-lg text-white">Support</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Patient Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Educational Materials
                  </Link>
                </li>
              </ul>
            </div>

            <div className="animate-fadeInUp animation-delay-300">
              <h3 className="font-semibold mb-6 text-lg text-white">Connect</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    News & Updates
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 animate-fadeInUp animation-delay-400">
            <p>&copy; 2024 ProjectNameX Research Initiative. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
