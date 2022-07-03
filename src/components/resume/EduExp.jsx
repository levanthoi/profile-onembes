import React, { Component } from 'react';
import { BsBook } from 'react-icons/bs';

class EduExp extends Component {
    render() {
        return (
            <section className="my-6">
                <div className="flex justify-start gap-7">
                    <div className="w-max p-2 bg-gray-light rounded-lg text-yellow-300 flex justify-center items-center shadow-base shadow-white">
                        <BsBook size={20} />
                    </div>
                    <h1>{this.props.name}</h1>
                </div>
                <ol className="ml-16 mt-8">
                    {
                        this.props.list.map(({ id, title, years, dec }) => (
                            <li key={id} className="timeline-item flex flex-col gap-1 mt-4 relative md:before:left-[-40px]">
                                <h2>{title}</h2>
                                <span className="text-yellow-400">{years}</span>
                                <p className="text-sm text-gray-400">{dec}</p>
                            </li>

                        ))
                    }
                </ol>
            </section>
        )
    }
}

export default EduExp;