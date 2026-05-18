const isDevelopment = process.env.NODE_ENV !== 'production'

function shouldWrite(level: 'debug' | 'info' | 'warn' | 'error'): boolean {
  if (level === 'error') {
    return true
  }

  return isDevelopment
}

function write(level: 'debug' | 'info' | 'warn' | 'error', messages: unknown[]): void {
  if (!shouldWrite(level)) {
    return
  }

  if (level === 'error') {
    console.error('[Study in Nepal]', ...messages)
    return
  }

  if (level === 'warn') {
    console.warn('[Study in Nepal]', ...messages)
    return
  }

  if (level === 'info') {
    console.info('[Study in Nepal]', ...messages)
    return
  }

  console.debug('[Study in Nepal]', ...messages)
}

export const logger = {
  debug: (...messages: unknown[]) => write('debug', messages),
  info: (...messages: unknown[]) => write('info', messages),
  warn: (...messages: unknown[]) => write('warn', messages),
  error: (...messages: unknown[]) => write('error', messages),
}
