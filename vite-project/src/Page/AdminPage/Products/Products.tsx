import { useEffect, useState } from 'react'
import { Table, Button, Modal, Input, InputNumber, Select } from 'antd'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { Option } from 'antd/es/mentions'
import productApi from 'src/api/productApi'
import categoryApi from 'src/api/categoryApi'
import axios from 'axios'
// import { img } from 'src/assets/no-product.png'

const Products = () => {
  const [imageUrls, setImageUrls] = useState<File[]>([])
  const [thumb, setThumb] = useState<File[]>([])

  const [imageColors, setImageColors] = useState<string[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [categories, setCategories] = useState([])
  const { handleSubmit, control } = useForm()

  const productList = [
    {
      id: 1,
      name: 'nta',
      price: 1000000,
      image: ''
    },
    {
      id: 2,
      name: 'nta',
      price: 1000000,
      image: 'https://picsum.photos/200/300'
    }
  ]
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'Tùy chọn',
      dataIndex: 'image',
      key: 'image'
    }
  ]

  const handleAddProduct = () => {
    setIsModalVisible(true)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSave: SubmitHandler<any> = async (formData) => {
    const formDataToSend = new FormData()

    formDataToSend.append('title', formData.title)
    formDataToSend.append('category_id', formData.category_id)
    formDataToSend.append('price', formData.price.toString())
    formDataToSend.append('discount', formData.discount.toString())
    formDataToSend.append('description', formData.description)

    thumb.forEach((file, index) => {
      formDataToSend.append(`thumbnail`, file)
    })

    imageUrls.forEach((file, index) => {
      formDataToSend.append(`thumb`, file)
      formDataToSend.append(`color`, imageColors[index])
    })

    console.log(formDataToSend)
    try {
      const response = await axios.post('http://localhost:3001/api/product/create', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(response.data)
      setIsModalVisible(false)
    } catch (error) {
      console.error('Error:', error)
    }

    //fetch(formData)
    setIsModalVisible(false)
    //setImageColors('')
  }

  const fetch = async (data) => {
    try {
      const res = await productApi.postProduct(data)
      if (res.status === 200) {
        console.log('Them thanh cong')
      }
    } catch (error) {
      console.error(error)
    }
  }
  //Call api lay ve categories
  useEffect(() => {
    const fetchCate = async () => {
      try {
        const res = await categoryApi.getAll()
        setCategories(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCate()
  }, [])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ?? []
    const filesArray = Array.from(files)
    //const newImageNames = filesArray.map((file) => file)
    //console.log(newImageNames)
    setImageUrls([...imageUrls, ...filesArray])
  }

  const handleThumbChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ?? []
    const filesArray = Array.from(files)
    setThumb(filesArray)
  }

  const handleColorChange = (index: number, value: string) => {
    const updatedImageColors: string[] = [...imageColors]
    updatedImageColors[index] = value
    setImageColors(updatedImageColors)
  }

  return (
    <div className='flex flex-col'>
      <div className='mb-4 text-right'>
        <Button
          type='primary'
          onClick={handleAddProduct}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded'
        >
          Thêm sản phẩm
        </Button>
      </div>
      <div>
        <Table columns={columns} dataSource={productList} />
        {/* <img src="./" alt="" /> */}
      </div>
      <Modal
        title='Thêm sản phẩm'
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key='cancel' onClick={handleCancel}>
            Hủy
          </Button>,
          <Button
            key='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded'
            type='primary'
            onClick={handleSubmit(handleSave)}
          >
            Lưu
          </Button>
        ]}
      >
        <form onSubmit={handleSubmit(handleSave)}>
          <div className='mb-4'>
            <p className='block mb-2'>Tên sản phẩm:</p>
            <Controller
              name='title'
              control={control}
              render={({ field }) => <Input {...field} className='w-full' />}
            />
          </div>

          <div className='mb-4'>
            <p className='block mb-2'>Chọn danh mục:</p>
            <Controller
              name='category_id'
              control={control}
              defaultValue='1'
              render={({ field }) => (
                <Select className='w-full' {...field}>
                  {categories.map((category) => (
                    <Option key={category.id} value={category.id}>
                      {category.name}
                    </Option>
                  ))}
                </Select>
              )}
            />
          </div>

          <div className='mb-4'>
            <p className='block mb-2'>Chọn hình đại diện:</p>
            <Input name='thumbnail' type='file' onChange={handleThumbChange} className='w-full' multiple />
            <img
              src={thumb.length > 0 ? URL.createObjectURL(thumb[0]) : null}
              alt={`Preview`}
              className='max-w-16 h-16 mb-2'
            />
          </div>

          <div className='mb-4'>
            <p className='block mb-2'>Giá:</p>
            <Controller
              name='price'
              control={control}
              render={({ field }) => <InputNumber {...field} className='w-full' />}
            />
          </div>

          <div className='mb-4'>
            <p className='block mb-2'>Giảm giá:</p>
            <Controller
              name='discount'
              control={control}
              render={({ field }) => <InputNumber {...field} className='w-full' />}
            />
          </div>

          <div className='mb-4'>
            <p className='block mb-2'>Chọn chi tiết hình ảnh:</p>
            <Input type='file' onChange={handleImageChange} className='w-full' multiple />
            <div className='flex flex-wrap'>
              {imageUrls.map((imageUrl, index) => (
                <div key={`image-${index}`} className='mb-4 mr-4'>
                  <img
                    src={imageUrl ? URL.createObjectURL(imageUrl) : null}
                    alt={`Preview ${index}`}
                    className='max-w-16 h-16 mb-2'
                  />
                  <Select
                    key={`select-${index}`}
                    placeholder='Chọn màu'
                    onChange={(value) => handleColorChange(index, value)}
                    className='w-full'
                    style={{ width: '100%', backgroundColor: 'yellow' }} // Điều chỉnh màu nền ở đây
                  >
                    <Option value='yellow'>Vàng</Option>
                    <Option value='blue'>Xanh</Option>
                    <Option value='red'>Đỏ</Option>
                  </Select>
                </div>
              ))}
            </div>
          </div>

          <div className='mb-4'>
            <p className='block mb-2'>Mô tả:</p>
            <Controller
              name='description'
              control={control}
              render={({ field }) => <Input.TextArea {...field} className='w-full' />}
            />
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default Products
