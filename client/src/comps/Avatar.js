import React from 'react'
import { Image } from 'semantic-ui-react'
import axios from 'axios'

class Avatar extends React.Component {
    state = { file: {} }
    fileInputRef = React.createRef();

    fileChange = e => {
        this.upload(e.target.files[0])
    };

    upload = async (file) => {
        const data = new FormData();
        data.append('file', file);
        data.append('id', this.props.id);
        const resp = await axios.post('/api/users/files', data)
        this.props.onUpload(resp.data.path)
    }

    render() {
        return (
            <>
                <Image 
                    src={this.props.image || 'https://react.semantic-ui.com/images/wireframe/square-image.png'} size='small' circular onClick={() => this.fileInputRef.current.click()} />
                <input
                    ref={this.fileInputRef}
                    type="file"
                    hidden
                    accept="image/x-png,image/gif,image/jpeg"
                    onChange={this.fileChange}
                />
            </>
        )
    }
}

export default Avatar