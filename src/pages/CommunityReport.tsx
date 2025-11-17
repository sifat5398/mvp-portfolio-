import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Users, Clock, Heart, DollarSign, ThumbsUp, ThumbsDown, Wrench, Lightbulb, BarChart3, Sparkles, Repeat, Flame, Search, Trophy, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const CommunityReport = () => {
  const heroAnimation = useScrollAnimation();
  const summaryAnimation = useScrollAnimation();
  const participantsAnimation = useScrollAnimation();
  const activityAnimation = useScrollAnimation();
  const satisfactionAnimation = useScrollAnimation();
  const economyAnimation = useScrollAnimation();
  const enjoyAnimation = useScrollAnimation();
  const frustrationsAnimation = useScrollAnimation();
  const toolsAnimation = useScrollAnimation();
  const takeawaysAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const experienceData = [{
    name: "More than 2 years",
    shortName: ">2y",
    value: 71.6,
    color: "#8B5CF6",
    description: "Veteran managers"
  }, {
    name: "1-2 years",
    shortName: "1-2y",
    value: 16.0,
    color: "#EC4899",
    description: "Experienced players"
  }, {
    name: "Less than 1 year",
    shortName: "<1y",
    value: 12.4,
    color: "#06B6D4",
    description: "New to Sorare"
  }];
  const activityData = [{
    name: "Daily",
    value: 93.8
  }, {
    name: "Several times/week",
    value: 6.2
  }];
  const timeSpentData = [{
    range: "10+ hours",
    percentage: 32.1
  }, {
    range: "5-10 hours",
    percentage: 24.7
  }, {
    range: "3-5 hours",
    percentage: 25.9
  }, {
    range: "1-3 hours",
    percentage: 14.8
  }, {
    range: "< 1 hour",
    percentage: 2.5
  }];
  const satisfactionData = [{
    metric: "Fun Score",
    score: 4.01,
    max: 5
  }, {
    metric: "App Usability",
    score: 3.09,
    max: 5
  }, {
    metric: "ROI Satisfaction",
    score: 2.83,
    max: 5
  }];
  const toolsUsed = [{
    name: "SorareScore",
    icon: BarChart3,
    url: "https://sorarescore.com/dashboard"
  }, {
    name: "Sorare Inside",
    icon: TrendingUp,
    url: "https://sorareinside.com/"
  }, {
    name: "SofaScore",
    icon: BarChart3,
    url: "https://www.sofascore.com/de/"
  }, {
    name: "FlashScore",
    icon: TrendingUp,
    url: "https://www.flashscore.de/"
  }, {
    name: "LigaInsider",
    icon: Users,
    url: "https://www.ligainsider.de/"
  }];
  const enjoyMost = [{
    text: "The gameplay loop",
    icon: Repeat,
    gradient: "from-blue-500/10 to-blue-500/5",
    border: "border-blue-500/20",
    iconColor: "text-blue-500"
  }, {
    text: "New features (Wheel, Hot Streaks)",
    icon: Flame,
    gradient: "from-pink-500/10 to-pink-500/5",
    border: "border-pink-500/20",
    iconColor: "text-pink-500"
  }, {
    text: "Scouting young players",
    icon: Search,
    gradient: "from-purple-500/10 to-purple-500/5",
    border: "border-purple-500/20",
    iconColor: "text-purple-500"
  }, {
    text: "Competing every weekend",
    icon: Trophy,
    gradient: "from-primary/10 to-primary/5",
    border: "border-primary/20",
    iconColor: "text-primary"
  }, {
    text: "Card collecting",
    icon: Layers,
    gradient: "from-slate-500/10 to-slate-500/5",
    border: "border-slate-500/20",
    iconColor: "text-slate-500"
  }];
  const enjoyLeast = [{
    issue: "Reward value & relevance",
    intensity: 85
  }, {
    issue: "Classic competitions",
    intensity: 72
  }, {
    issue: "Market volatility",
    intensity: 68
  }, {
    issue: "Card prices",
    intensity: 65
  }, {
    issue: "UX friction",
    intensity: 52
  }];
  const keyTakeaways = ["Reward transparency & fairness matter", "Usability improvements would create big wins", "Hot Streaks and the Wheel are widely loved", "Market clarity is crucial", "Players are deeply engaged — but want a smoother journey"];
  return <>
      <Helmet>
        <title>Sorare Community Report #1 | Sorare Basic</title>
        <meta name="description" content="A data-driven look at how 81 Sorare managers experience the 2025/26 season. Insights on gameplay, satisfaction, economy, and more." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section ref={heroAnimation.ref} className={`relative overflow-hidden py-24 sm:py-32 transition-all duration-1000 ${heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-purple-500/5 to-background" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                <Sparkles className="h-4 w-4" />
                Data Report #1
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-br from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Sorare Community Report #1
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8">Insights from Sorare-Managers</p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A data-driven look at how Sorare players experience the 2025/26 season.
              </p>
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <section ref={summaryAnimation.ref} className={`py-16 sm:py-24 transition-all duration-1000 ${summaryAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">What the Community Really Thinks</h2>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                81 respondents shared their perspective on gameplay, fun, the economy, the new features, and their overall satisfaction. Most are long-time, daily active managers — making this a powerful qualitative pulse-check of the Sorare ecosystem.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20 animate-fade-in">
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-blue-500 mb-4" />
                    <div className="text-4xl font-bold mb-2">72%</div>
                    <div className="text-sm text-muted-foreground">Played 2+ years</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20 animate-fade-in" style={{
                animationDelay: "0.1s"
              }}>
                  <CardContent className="p-6">
                    <TrendingUp className="h-8 w-8 text-purple-500 mb-4" />
                    <div className="text-4xl font-bold mb-2">94%</div>
                    <div className="text-sm text-muted-foreground">Open daily</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 border-pink-500/20 animate-fade-in" style={{
                animationDelay: "0.2s"
              }}>
                  <CardContent className="p-6">
                    <Clock className="h-8 w-8 text-pink-500 mb-4" />
                    <div className="text-4xl font-bold mb-2">32%</div>
                    <div className="text-sm text-muted-foreground">Spend 10+ hrs/week</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 animate-fade-in" style={{
                animationDelay: "0.3s"
              }}>
                  <CardContent className="p-6">
                    <Heart className="h-8 w-8 text-primary mb-4" />
                    <div className="text-4xl font-bold mb-2">4.0/5</div>
                    <div className="text-sm text-muted-foreground">Fun rating</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Who Took Part */}
        <section ref={participantsAnimation.ref} className={`py-16 sm:py-24 bg-muted/30 transition-all duration-1000 ${participantsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Experienced Managers, Strong Opinions</h2>
              <p className="text-lg text-muted-foreground text-center mb-12">The sample is heavily experienced — a source for deep product feedback.</p>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5">
                  <CardContent className="p-8">
                    <ResponsiveContainer width="100%" height={400}>
                      <PieChart>
                        <Pie data={experienceData} cx="50%" cy="50%" innerRadius={80} outerRadius={140} fill="#8884d8" dataKey="value" animationBegin={0} animationDuration={1200} paddingAngle={2} label={({
                        cx,
                        cy,
                        midAngle,
                        innerRadius,
                        outerRadius,
                        value
                      }) => {
                        const RADIAN = Math.PI / 180;
                        const radius = innerRadius + (outerRadius - innerRadius) * 1.3;
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);
                        return <text x={x} y={y} fill="currentColor" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="text-sm font-semibold">
                                {`${value}%`}
                              </text>;
                      }}>
                          {experienceData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} className="hover:opacity-80 transition-opacity cursor-pointer" />)}
                        </Pie>
                        <Tooltip content={({
                        active,
                        payload
                      }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg">
                                  <p className="font-semibold text-lg mb-1">{data.name}</p>
                                  <p className="text-sm text-muted-foreground mb-2">{data.description}</p>
                                  <p className="text-2xl font-bold" style={{
                              color: data.color
                            }}>
                                    {data.value}%
                                  </p>
                                </div>;
                        }
                        return null;
                      }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  {experienceData.map((item, index) => <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors animate-fade-in" style={{
                  animationDelay: `${index * 0.15}s`
                }}>
                      <div className="w-4 h-4 rounded-full flex-shrink-0" style={{
                    backgroundColor: item.color
                  }} />
                      <div className="flex-1">
                        <p className="font-semibold text-lg">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold" style={{
                      color: item.color
                    }}>
                          {item.value}%
                        </p>
                      </div>
                    </div>)}
                  
                  <Card className="mt-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">Key Insight</p>
                          <p className="text-sm text-muted-foreground">
                            88% of respondents have been playing for over a year, providing deep, 
                            experience-based feedback on the platform's evolution.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Player Activity */}
        <section ref={activityAnimation.ref} className={`py-16 sm:py-24 transition-all duration-1000 ${activityAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">How Often They Play — Spoiler: A Lot</h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                The community spends significant time scouting, setting lineups, and managing their clubs.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-6 text-center">Play Frequency</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={activityData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="hsl(var(--primary))" animationDuration={1000} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-6 text-center">Weekly Time on Sorare</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={timeSpentData} layout="vertical">
                        <XAxis type="number" />
                        <YAxis dataKey="range" type="category" width={100} />
                        <Tooltip />
                        <Bar dataKey="percentage" fill="hsl(var(--purple-500))" animationDuration={1000} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Enjoyment & Satisfaction */}
        <section ref={satisfactionAnimation.ref} className={`py-16 sm:py-24 bg-muted/30 transition-all duration-1000 ${satisfactionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Fun Score: Strong — Satisfaction: Solid but Not Perfect</h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Players love the game and its weekly rhythm — but usability and perceived financial performance show clear room for improvement.
              </p>

              <Card>
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {satisfactionData.map((item, index) => <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">{item.metric}</span>
                          <span className="text-2xl font-bold">{item.score} / {item.max}</span>
                        </div>
                        <div className="h-4 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out" style={{
                        width: `${item.score / item.max * 100}%`
                      }} />
                        </div>
                      </div>)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section ref={economyAnimation.ref} className={`py-16 sm:py-24 transition-all duration-1000 ${economyAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">ROI: Very Mixed — With a Wide Spread</h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Most managers see moderate returns. A few outlier performers dramatically increase the average, but the median gives a realistic picture.
              </p>

              <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5">
                <CardContent className="p-12">
                  <div className="grid md:grid-cols-2 gap-8 text-center">
                    <div>
                      <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                      <div className="text-5xl font-bold mb-2">35%</div>
                      <div className="text-lg text-muted-foreground">Median ROI</div>
                      <div className="text-sm text-muted-foreground mt-2">(Most realistic)</div>
                    </div>
                    <div className="opacity-60">
                      <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <div className="text-5xl font-bold mb-2">Higher</div>
                      <div className="text-lg text-muted-foreground">Mean ROI</div>
                      <div className="text-sm text-muted-foreground mt-2">(Skewed by outliers)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Players Enjoy Most */}
        <section ref={enjoyAnimation.ref} className={`py-16 sm:py-24 bg-muted/30 transition-all duration-1000 ${enjoyAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">What Brings the Most Joy?</h2>

              <div className="flex flex-col items-center gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                  {enjoyMost.slice(0, 3).map((item, index) => <Card key={index} className={`bg-gradient-to-br ${item.gradient} ${item.border} hover-scale animate-fade-in`} style={{
                  animationDelay: `${index * 0.1}s`
                }}>
                      <CardContent className="p-6">
                        <item.icon className={`h-8 w-8 ${item.iconColor} mb-3`} />
                        <p className="font-medium">{item.text}</p>
                      </CardContent>
                    </Card>)}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl w-full">
                  {enjoyMost.slice(3, 5).map((item, index) => <Card key={index + 3} className={`bg-gradient-to-br ${item.gradient} ${item.border} hover-scale animate-fade-in`} style={{
                  animationDelay: `${(index + 3) * 0.1}s`
                }}>
                      <CardContent className="p-6">
                        <item.icon className={`h-8 w-8 ${item.iconColor} mb-3`} />
                        <p className="font-medium">{item.text}</p>
                      </CardContent>
                    </Card>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What They Enjoy Least */}
        <section ref={frustrationsAnimation.ref} className={`py-16 sm:py-24 transition-all duration-1000 ${frustrationsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Where Sorare Frustrates Players Most</h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                The classic modes and reward structures are the biggest pressure points.
              </p>

              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {enjoyLeast.map((item, index) => <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <ThumbsDown className="h-5 w-5 text-pink-500" />
                            <span className="font-medium">{item.issue}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{item.intensity}%</span>
                        </div>
                        <div className="h-3 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-pink-500 to-pink-500/50 transition-all duration-1000 ease-out" style={{
                        width: `${item.intensity}%`
                      }} />
                        </div>
                      </div>)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tools Used */}
        <section ref={toolsAnimation.ref} className={`py-16 sm:py-24 bg-muted/30 transition-all duration-1000 ${toolsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Which Tools the Community Relies On</h2>
              <p className="text-lg text-muted-foreground text-center mb-12">Third-party tools are essential to most managers — signs of a deeply engaged, data-driven community.

Here are the Top-5 tools, used by the community.</p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {toolsUsed.map((tool, index) => <a key={index} href={tool.url} target="_blank" rel="noopener noreferrer" className="block">
                    <Card className="hover-scale animate-fade-in h-full transition-colors hover:border-primary/50" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                          <tool.icon className="h-6 w-6 text-primary" />
                        </div>
                        <p className="font-semibold">{tool.name}</p>
                      </CardContent>
                    </Card>
                  </a>)}
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section ref={takeawaysAnimation.ref} className={`py-16 sm:py-24 transition-all duration-1000 ${takeawaysAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">What This Means for the Future</h2>

              <Card className="bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {keyTakeaways.map((takeaway, index) => <div key={index} className="flex items-start gap-4 animate-fade-in" style={{
                    animationDelay: `${index * 0.1}s`
                  }}>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <Lightbulb className="h-4 w-4 text-primary" />
                        </div>
                        <p className="text-lg">{takeaway}</p>
                      </div>)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaAnimation.ref} className={`py-16 sm:py-24 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 transition-all duration-1000 ${ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Want to Contribute to Report #2?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Want to help us to make the next report even better? Share your feedback with a mail:{" "}
                <a href="mailto:sorare.trading.coach@gmail.com" className="text-primary hover:underline transition-all">
                  sorare.trading.coach@gmail.com
                </a>
              </p>
              <Link to="/">
                <Button size="lg" className="gap-2">
                  <Sparkles className="h-5 w-5" />
                  Explore More Tools
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>;
};
export default CommunityReport;