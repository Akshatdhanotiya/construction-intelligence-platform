// API Client for AI-Powered Multimodal Construction Intelligence Platform
const API_BASE = '/api';

export async function checkHealth() {
  const res = await fetch(`${API_BASE}/health`);
  if (!res.ok) throw new Error('Health check failed');
  return res.json();
}

export async function analyzeSiteSafety(payload) {
  const res = await fetch(`${API_BASE}/safety/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Safety analysis failed');
  return res.json();
}

export async function analyzeCrack(payload) {
  const res = await fetch(`${API_BASE}/crack/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Crack analysis failed');
  return res.json();
}

export async function estimateValuation(payload) {
  const res = await fetch(`${API_BASE}/valuation/estimate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Valuation calculation failed');
  return res.json();
}

export async function generateProjectPlan(payload) {
  const res = await fetch(`${API_BASE}/planning/generate-plan`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Project planning failed');
  return res.json();
}

export async function processDailyLog(payload) {
  const res = await fetch(`${API_BASE}/daily-log/process-log`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Daily log processing failed');
  return res.json();
}

export async function getWeatherAdvisory(payload) {
  const res = await fetch(`${API_BASE}/weather/advisory`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Weather advisory failed');
  return res.json();
}

export async function queryKnowledge(payload) {
  const res = await fetch(`${API_BASE}/knowledge/query`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Knowledge query failed');
  return res.json();
}

export async function generateAuditReport(payload) {
  const res = await fetch(`${API_BASE}/report/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Audit report generation failed');
  return res.json();
}
