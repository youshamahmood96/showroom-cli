# Vehicle Showroom Management Command Line Program
***
A cli to manage a vehicle showroom
## Dependancies Used
- Mongoose
- Commander
- Inquirer
## Requirements
This program uses a local mongodb instance.To use this program on your localmachine, you will need mongodb to be installed.And to have a better representation of the database, it is suggested to have mongoDB compass installed. 
## Usage

Step 1:

```sh
$ git clone <url of this repo>
```
Step 2:

```sh
$ cd <folder-name>
```
Step 3:

```sh
$ npm install
```
Step 4:

```sh
$ npm link
```

You will be good to go.

## Commands

1.Add a vehicle:

```sh
$ showroom add
or
$ showroom a
```

2.Delete a vehicle:
```sh
$ showroom delete <model-number>
or
$ showroom d <model-number>
```

3.List all the vehicles in the showroom:
```sh
$ showroom list
or
$ showroom ls
```

4.List all the vehicles in the showroom along with the number of expected visitors:
```sh
$ showroom list-all
or
$ showroom lsa
```



  