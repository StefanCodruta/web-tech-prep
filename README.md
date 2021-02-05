# Ho to web



### Working with objects  
- declare an Object: ``` let result = {}; ```
- looping through an Object 
	```
	const keys = Object.keys(result);
	for (const key of keys) {
	}
	```  
- get the size of an Object  
	```
	const size = Object.keys(result).length;
	```
- returning a Promise  
	``` 
	return new Promise((resolve,reject)=>{ 
	// error
	// reject(new Error("Invalid discount"));      
	}
	```


	
### REST


- find entity by id
```
     let author = await Author.findById(req.params.id);
```  
  
- get all from db  
```
     await Reviews.findAll().then((allReviews) => reviewsFound = allReviews);
```   
  
- delete after findById
```			
    await author.destroy();
```  

- update an entity  
# Update entity
``` 
    await Author.update({
		name: req.body.name,
		email: req.body.email,
		address: req.body.address,
		age: req.body.age
	}, {
		where: {
			id: req.params.id
		}
	}).then((result) => {
		res.status(202).send({ message: "accepted" });
	})
```  



```
	if (Object.keys(req.body).length === 0) {
        return res.status(400).send({ "message": "body is missing" });
    }
```  

# Pagination  
```
let pageNo = Number(req.query.pageNo);
let pageSize = Number(req.query.pageSize);

if (isNaN(pageNo) && isNaN(pageSize)) {
	return await Author.findAll().then((authors) => res.status(200).send(authors));
}

if (!isNaN(pageNo) && !isNaN(pageSize)) {
	let offset = Number(req.query.pageNo) * Number(pageSize);
	let limit = Number(req.query.pageSize);
	await Author.findAll({ limit, offset }).then((authors) => res.status(200).send(authors));
}
```

# Front-end  
  - adding a component into another one,  with props  
```			
       <RobotForm onAdd={this.add} />
```  

- declaration of state in constructor of your React class:
```
        this.state = {
            products: []
        };
```

- set state:
```
        this.setState({
            products: [...this.state.products, product]
        })
```

- this.add defined in constructor as a function that use RobotStore for saving 
```
	this.store = new RobotStore();
	this.add = (robot) => {
		this.store.addRobot(robot)
	}
```  



- onClick the button saves as props an object that is required for add   
```
		<button type="button" value="add"
		    onClick={() => {
			this.props.onAdd(
			    {
				name: this.state.name,
				type: this.state.type,
				mass: this.state.mass
			    }
			)
		}}
></button>
``` 
# REACT

- save the props: ```    let { item } = this.props; ```
- handleChange - in order to set the state of an input given a certain event:
```
              handleChange = (evt) => {
                    this.setState({
                        [evt.target.name]: evt.target.value
                    });
              }
```

- in order to show 2 different things in a component; one state is for editing and the other shows the details
	- first init a boolean variable in state:   
		```
		this.state = {
			     isEditing: false,
			     name: item.name,
			     employees: item.employees,
			     revenue: item.revenue
			     }		
		```

	- than in the render area you can check if the **isEditing**  

       ``` 
		render() {
			    let { item } = this.props
			    if (this.state.isEditing) {
			       return <div></div>
			    }
			    else {
			      return (
				<div></div>
			      )
			    }
		     } 
	``` 
	
	- add inputs and cancel button to change the state of **isEditing**:  
     
	       ```
	       return <div>
			<input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} />
			<input type="text" id="employees" name="employees" onChange={this.handleChange} value={this.state.employees} />
			<input type="text" id="revenue" name="revenue" onChange={this.handleChange} value={this.state.revenue} />
			<input type="button" value="save" onClick={this.save} />
			<input type="button" value="cancel" onClick={() => this.setState({
						isEditing: false
					})} />
		   </div>
	       ```



```
return (
	<div>
	{ 
	this.state.showDetails === false ?
		this.state.robots.map((e, i) => 
			<div key={i}>
				<Robot item={e} key={i} onSelect={
					()=>{this.onSelect(i)}
				} />
			</div>
		)
	: <RobotDetails item={this.state.robots[this.state.index]}
	onSelect={()=>{this.onSelect(-1)}}
	/>
	}

	</div>
	)
```

```
class RobotDetails extends Component {
    render() {
        let { item } = this.props
        return (
            <div>
                Hello, my name is {item.name}. I am a {item.type} and weigh {item.mass}
      			<button value="cancel" onClick={this.props.onSelect}>Click me</button>
            </div>

        )
    }
}
``` 

```
if (!this.state.isEditing) {
	return (
		<div>
			Hello, my name is {item.name}. I am a {item.type} and weigh {item.mass}
			<input type="button" value="edit" onClick={() => this.setState({
				isEditing: true
			})} />
		</div>
	)
} else {
	return <div>
		<input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} />
		<input type="text" id="type" name="type" onChange={this.handleChange} value={this.state.type} />
		<input type="text" id="mass" name="mass" onChange={this.handleChange} value={this.state.mass} />
		<input type="button" value="save" onClick={this.save} />
		<input type="button" value="cancel" onClick={() => this.setState({
			isEditing: false
		})} />
	</div>
}
```
