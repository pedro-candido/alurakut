import { MainGrid } from '../src/components/MainGrid';
import { Box } from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelationsBoxWrapper'

const ProfileSidebar = ({ username }) =>{
  const imageUrl = `https://github.com/${username}.png`

  return (
    <Box>
      <img src={imageUrl} style={{ borderRadius: '8px' }}/>
    </Box>
  )
}

export default function Home() {
  const githubUser = 'pedro-candido';
  const pessoasFavoritas = [
    'carlos-HFC', 
    'ArcherDiego', 
    'eduardoAmroginski', 
    'taciossbr', 
    'marcobrunodev',
    'felipefialho'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar username={githubUser}/>
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className={'title'}>Bem vindo!!!</h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <Box>
            Amigos
          </Box>
          <ProfileRelationsBoxWrapper>
            <h2 className={'smallTitle'}>Pessoas da Comunidade ({pessoasFavoritas.length})</h2>
            
            <ul>
              {
                pessoasFavoritas.map((pessoa) => {
                  return (
                    <li key={ pessoa }>
                      <a href={`/users/${ pessoa }`} >
                        <img src={`https://github.com/${pessoa}.png`} />
                        <span>{pessoa}</span>
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
