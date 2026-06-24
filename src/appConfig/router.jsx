import { createBrowserRouter } from "react-router-dom";
import HomePage from '@/pages/HomePage';
import ContextIntelligencePage from '@/pages/ContextIntelligencePage';
import AutomationPage from '@/pages/AutomationPage';
import RealTimeContext from "@/pages/RealTimeContext"
import Declarative_Context_Protocol from "../pages/Declarative_Context_Protocol";
import TcmPage from "../pages/TcmPage"
import ContextCapsulePage from "../pages/ContextCapsulePage"
import ReflectiveMemory from "../pages/ReflectiveMemory"
import NeuroTestPage from "../pages/NeuroTestPage"
import HamnPage from "../pages/HamnPage";
import CoreTestPage from "../pages/CoreTestPage";
import CompanyPage from "../pages/CompanyPage";
import ResourcesPage from "../pages/ResourcesPage";
import PricingPage from "../pages/PricingPage";
import AboutPage from "../pages/AboutPage";
import DemoPage from "../pages/DemoPage";
import SecurityPage from "../pages/SecurityPage";
import PlatformArchitecture from "@/pages/PlatformArchitecture";
import AutonomousTestingPage from "@/pages/AutonomousTestingPage";
import Integrations from "../pages/Integrations";
import AgenticArchitecturePage from "../pages/AgenticArchitecturePage";
import MemoryPage from "../pages/MemoryPage";
import DeploymentOptionsPage from "../pages/DeploymentOptionsPage";
import PlatformCapabilitiesPage from "../pages/PlatformCapabilitiesPage";
import HowAutonomousTestingWorks from "../pages/HowAutonomousTestingWorks";
import SecuritybyDesignPage from "../pages/SecuritybyDesignPage";
import TwoPlatformsOneIntelligenceLoopPage from "../pages/TwoPlatformsOneIntelligenceLoopPage";
import LLMBasedEvaluationPage from "../pages/LLMBasedEvaluationPage";
import KnowledgeBasedCreationPage from "../pages/KnowledgeBasedCreationPage";
import CICDPage from "../pages/CICDPage";
import TestAnalyticsInsightsPage from "../pages/TestAnalyticsInsightsPage";
import IntelligentTestAutomation from "../pages/IntelligentTestAutomation";
import TestingAISystemsPage from "../pages/TestingAISystemsPage";
import SystemArchitecturePage from "../pages/SystemArchitecturePage";
import Contact from "../pages/Contact";
import BlogPage from "../pages/BlogPage";
import BlogDetail from "../pages/BlogDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/ai-automation",
    element: <AutomationPage />,
  },
  {
    path: "/context-intelligence-platform",
    element: <ContextIntelligencePage />,
  },
  {
    path: "/real-time-context",
    element: <RealTimeContext />,
  },
  {
    path: "/declarative-context-protocol",
    element: <Declarative_Context_Protocol />
  },
  {
    path: "/temporal-context-memory",
    element: <TcmPage />,
  },
  {
    path: "/context-capsules",
    element: <ContextCapsulePage />
  },
  {
    path: "/reflective-memory",
    element: <ReflectiveMemory />
  }, {
    path: "/neuro-test",
    element: <NeuroTestPage />
  }, {
    path: "/hybrid-attention-memory-network",
    element: <HamnPage />
  },
  {
    path: "/core-test",
    element: <CoreTestPage />
  }, {
    path: "/company",
    element: <CompanyPage />
  }, {
    path: "/resources",
    element: <ResourcesPage />
  },
  {
    path: "/contact-us",
    element: <Contact />
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/demo",
    element: <DemoPage />,
  }, {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/platform-architecture",
    element: <PlatformArchitecture />
  },
  {
    path: "/security",
    element: <SecurityPage />
  }, {
    path: "/autonomous-testing-vs-traditional-testing",
    element: <AutonomousTestingPage />
  },

  
  {
    path:"/platform-integrations",
    element:<Integrations/>
  },{
    path:"/agentic-architecture",
    element:<AgenticArchitecturePage/>
  },{
    path:"/memory-and-graph-rag",
    element:<MemoryPage/>
  },{
    path:"/platform-deployment",
    element:<DeploymentOptionsPage/>
  },{
    path:"/platform-capabilities",
    element:<PlatformCapabilitiesPage/>
  },{
    path:"/how-autonomous-testing-works",
    element:<HowAutonomousTestingWorks/>
  }
  ,{
    path:"/arhitecture-security",
    element:<SecuritybyDesignPage/>
  },{
    path:"/two-platforms-one-intelligence-loop",
    element:<TwoPlatformsOneIntelligenceLoopPage/>
  },
  {
    path:"/llm-based-evaluation",
   element:<LLMBasedEvaluationPage />
  },
  {
    path:"/knowledge-base-creation-from-self-learning",
    element:<KnowledgeBasedCreationPage />
  },

  {
    path:"/ci-cd-devops-integration",
    element:<CICDPage />
  },{
    path:"/intelligent-test-automation",
    element:<IntelligentTestAutomation/>
  },{
    path:"/testing-ai-systems-at-interprise-scale",
    element:<TestingAISystemsPage/>
  },
    {
      path:"/test-analytics-insights",
      element:<TestAnalyticsInsightsPage />
    },
    {
      path:"/system-architecture-overview",
      element:<SystemArchitecturePage />
    },
    {
      path:"/blog",
      element:<BlogPage />
    },
    {
      path:"/blog-details",
      element:<BlogDetail />
    }
]);

export default router;
