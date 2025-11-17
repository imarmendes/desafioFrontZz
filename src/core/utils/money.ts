// util de formatação de moeda BRL
export function formatBRLFromNumber(value: number): string {
  if (isNaN(value)) return '';
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function formatBRLFromDigits(digits: string): string {
  const only = digits.replace(/\D/g, '');
  if (!only) return '';
  const num = parseInt(only, 10) / 100; // últimos dois dígitos são centavos
  return formatBRLFromNumber(num);
}

export function parseNumberFromMaskedBRL(masked: string): number {
  const only = masked.replace(/\D/g, '');
  if (!only) return 0;
  return parseInt(only, 10) / 100;
}
