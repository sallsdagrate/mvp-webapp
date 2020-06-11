An upload file input designed for images. Displays the uploaded image and can upload to s3

### props

#### handleChange
- **type**: function
- **default**: `null`
- **required**: `false`
- **description**: Callback function for image uploaded

#### default
- **type**: string
- **default**: `null`
- **required**: `false`
- **description**: the default src value for the image

#### bucket_filepath
- **type**: `string`
- **default**: `null`
- **required**: `false`
- **description**: The path to the file within the s3 bucket

#### bucket_url
- **type**: `string`
- **default**: `null`
- **required**: `false`
- **description**: The url to the bucket

``` jsx
import { FileUpload } from "mvp-webapp";

new <FileUpload  
        type='image'
        variant="circular"
        id="inputpicc"
        label='Company Logo'
        //bucket_filepath="enterprise_users/test/profile_pic"
        //bucket_url = "https://theaicore-data.s3.eu-west-2.amazonaws.com/public/"
        //dp_url = {null}
        handleChange = {(update)=>{
            console.log('just updated dat image')
            console.log(update)
        }
        }
></FileUpload>
```