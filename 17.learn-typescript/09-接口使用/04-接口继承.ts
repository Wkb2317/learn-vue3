interface ISwim{
  swimming : () => void
}

interface IFly{
  flying : () => void
}


interface IAction extends IFly, ISwim{ 

}

const action: IAction = {
  swimming() {

  },
  flying(){}
}
