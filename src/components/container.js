/** @jsx jsx */
import { jsx } from 'theme-ui'

const Container = ({ children, sx, ...rest }) => {
    return <div {...rest} sx={{
        mx: 'auto',
        maxWidth: 1200,
        ...sx
    }}>
        {children}
    </div>
}

export default Container