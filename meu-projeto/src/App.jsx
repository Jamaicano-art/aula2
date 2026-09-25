import EletricBorder from './componentes/EletricBorder/EletricBorder'
import CursorGrid from './componentes/cursorgrid/cursosgrid'

function App() {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100%',
        background: '#09090f',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0
        }}
      >
        <CursorGrid
          cellSize={64}
          color="#D946EF"
          radius={170}
          falloff="smooth"
          holdTime={500}
          fadeDuration={850}
          maxOpacity={1}
          fillOpacity={0.08}
          gridOpacity={0}
          clickPulse
          pulseSpeed={320}
        />
      </div>

      <EletricBorder
        color="#940bf0e8"
        speed={1.25}
        chaos={2}
        borderRadius={24}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div style={{ padding: '40px 56px', fontSize: '24px', color: 'white', letterSpacing: '0.04em' }}>
          Efeito Electric Border
        </div>
      </EletricBorder>
    </div>
  )
}

export default App
