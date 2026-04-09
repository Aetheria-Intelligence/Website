import {
  DEFAULT_IMAGE,
  faqSchema,
  organizationSchema,
  techArticleSchema,
  websiteSchema,
} from './seo.js';

const HOME_FAQ = faqSchema([
  {
    question: 'What is governed AI execution?',
    answer:
      'Governed AI execution keeps model intent separate from consequential action by requiring explicit authority, bounded execution, and retained proof.',
  },
  {
    question: 'Does Aetheria allow model intent to act automatically?',
    answer:
      'No. Every proposed action is evaluated before execution. When authority is insufficient, nothing runs.',
  },
  {
    question: 'Why do denial records matter?',
    answer:
      'Denial records preserve the fact that a consequential action was refused, which matters for accountability, review, and incident reconstruction.',
  },
]);

function articleMeta({ title, path, description, keywords }) {
  return {
    title,
    path,
    description,
    keywords,
    type: 'article',
    image: DEFAULT_IMAGE,
    schema: [
      techArticleSchema({
        headline: title,
        description,
        path,
      }),
    ],
  };
}

export const ROUTE_META = {
  '/': {
    title: 'Aetheria — Governed AI infrastructure for execution control',
    path: '/',
    description: 'Governed AI infrastructure for execution control, AI action authorization, and portable verification. Aetheria turns requests into structured proposals and evaluates authority before execution.',
    keywords:
      'governed AI infrastructure, AI governance system, AI action authorization, AI execution control, AI execution enforcement, bounded AI systems',
    image: DEFAULT_IMAGE,
    schema: [organizationSchema(), websiteSchema(), HOME_FAQ],
  },
  '/how-it-works': articleMeta({
    title: 'How governed execution works',
    path: '/how-it-works',
    description: 'Every requested action becomes a structured proposal. Authority resolves against policy, scope, actor, and runtime conditions before execution.',
    keywords: 'how governed execution works, AI authority before execution, AI execution lifecycle, AI action authorization',
  }),
  '/platform': articleMeta({
    title: 'Governed execution platform',
    path: '/platform',
    description: 'Proposal intake, decision service, execution gateway, bounded rails, operator review, and portable proof form the governed AI infrastructure surface.',
    keywords: 'governed AI infrastructure, AI governance system, AI control plane, AI execution gateway, AI action authorization',
  }),
  '/use-cases': articleMeta({
    title: 'Where governed execution matters',
    path: '/use-cases',
    description: 'Healthcare, finance, critical infrastructure, enterprise operations, and other environments where unauthorized machine action is unacceptable.',
    keywords: 'governed AI execution use cases, AI governance in healthcare, AI control in finance, governed AI infrastructure, critical infrastructure AI control',
  }),
  '/proof': articleMeta({
    title: 'Proof and traceability for AI actions',
    path: '/proof',
    description: 'Portable proof packets keep proposal, decision, scope, execution state, and denial linked for offline verification.',
    keywords: 'AI proof packet, AI verification, AI action traceability, AI execution receipts, denial record, portable proof',
  }),
  '/architecture': articleMeta({
    title: 'AI execution architecture',
    path: '/architecture',
    description: 'Contract layer, runtime enforcement layer, bounded capabilities, and separated planes for decision, execution, and proof.',
    keywords: 'AI execution architecture, AI enforcement layer, AI governance system architecture, bounded AI architecture, governed AI infrastructure',
  }),
  '/company': articleMeta({
    title: 'Why Aetheria exists',
    path: '/company',
    description: 'AI systems are moving from intent to action. Execution needs explicit authority, denial, and portable proof.',
    keywords: 'Aetheria company, governed AI infrastructure company, AI control category, AI governance system',
  }),
  '/access': articleMeta({
    title: 'Request access',
    path: '/access',
    description: 'Start a serious conversation about environment, action classes, evaluator posture, denial posture, and proof requirements.',
    keywords: 'Aetheria access, request access, governed AI deployment discussion, AI execution control evaluation, AI governance system evaluation',
  }),
  '/privacy': {
    title: 'Privacy Policy',
    path: '/privacy',
    description: 'Privacy disclosures for the Aetheria public website.',
    noIndex: true,
    image: DEFAULT_IMAGE,
    schema: [],
  },
  '/terms': {
    title: 'Terms of Use',
    path: '/terms',
    description: 'Terms governing use of the Aetheria public website.',
    noIndex: true,
    image: DEFAULT_IMAGE,
    schema: [],
  },
  '/ai-execution-control': articleMeta({
    title: 'AI execution control',
    path: '/ai-execution-control',
    description: 'AI execution control governs whether model intent may cross into a real system.',
    keywords: 'AI execution control, control what AI systems are allowed to do',
  }),
  '/ai-action-governance': articleMeta({
    title: 'AI action governance',
    path: '/ai-action-governance',
    description: 'AI action governance binds policy to execution instead of leaving it as advice.',
    keywords: 'AI action governance, AI governance before execution, governed AI action',
  }),
  '/bounded-ai-systems': articleMeta({
    title: 'Bounded AI systems',
    path: '/bounded-ai-systems',
    description: 'Bounded AI systems keep capability inside defined rails instead of exposing open-ended machine authority.',
    keywords: 'bounded AI systems, bounded AI actions, governed AI rails',
  }),
  '/ai-decision-vs-execution': articleMeta({
    title: 'AI decision vs execution',
    path: '/ai-decision-vs-execution',
    description: 'AI decision and AI execution are different events. Separating them creates the moment where authorization and denial become possible.',
    keywords: 'AI decision vs execution, AI recommendation vs execution, AI intent vs action',
  }),
  '/why-ai-needs-enforcement-layers': articleMeta({
    title: 'Why AI needs enforcement layers',
    path: '/why-ai-needs-enforcement-layers',
    description: 'Policy alone cannot stop a consequential machine action once the path is live. Enforcement layers can.',
    keywords: 'AI enforcement layers, AI safety enforcement, AI fail-closed control',
  }),
};
